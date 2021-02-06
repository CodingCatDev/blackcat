import * as admin from 'firebase-admin';
import { Post } from '@codingcatdev/models';
import { serviceAccountKey, firebaseConfig } from '@codingcatdev/config';

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
    databaseURL: firebaseConfig.databaseURL,
    storageBucket: firebaseConfig.storageBucket,
    projectId: firebaseConfig.projectId,
  });
}

export const firebaseAdmin = admin;

export async function postsService(postType: string): Promise<Post[]> {
  const postDocs = await admin
    .firestore()
    .collection('posts')
    .where('type', '==', postType)
    .where('publishedAt', '<', admin.firestore.Timestamp.now())
    .orderBy('publishedAt', 'desc')
    .get();

  const posts: FirebaseFirestore.DocumentData[] = [];
  for (const doc of postDocs.docs) {
    posts.push(cleanTimestamp(smallPostPayload(doc)));
  }
  return posts as Post[];
}

export function cleanTimestamp(
  data: FirebaseFirestore.DocumentData
): FirebaseFirestore.DocumentData {
  const docData = { ...data };
  Object.keys(docData).map((key) => {
    if (
      typeof docData[key] === 'object' &&
      Object.keys(docData[key]).includes('_nanoseconds')
    ) {
      const timestamp: admin.firestore.Timestamp = docData[key];
      docData[key] = timestamp.toMillis();
    } else {
      // eslint-disable-next-line no-self-assign
      docData[key] = docData[key];
    }
  });
  return docData;
}

function smallPostPayload(doc: FirebaseFirestore.DocumentData) {
  const post = doc.data() as Post;
  delete post.content;
  return post;
}
