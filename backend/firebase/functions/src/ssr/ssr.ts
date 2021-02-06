import * as functions from 'firebase-functions';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const universal = require(`./server/main`).app;
export const ssr = functions.https.onRequest(universal);
