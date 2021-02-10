import * as functions from 'firebase-functions';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const universal = require(`${process.cwd()}/dist/blackcat/server/main`).app;
// export const ssr = functions.https.onRequest(universal);
export const ssr = functions.https.onRequest((req, res) => {
  res.send(universal.toString());
});
