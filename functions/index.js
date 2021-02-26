const admin = require('firebase-admin');
admin.initializeApp();

const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
const db = admin.firestore();
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Jigmee!");
});
exports.writeToFirestore = functions.firestore
  .document('some/doc')
  .onUpdate((change, context) => {
    db.doc('some/otherdoc').set({"first" : "cloud function"});
  });