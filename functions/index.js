const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

// exports.writeToFirestore = functions.firestore
//   .document('some/doc')
//   .onWrite((change, context) => {
//     db.doc('some/otherdoc').set({ ... });
//   });
  exports.writeToFirestore = functions.firestore
    .document('jigmee-short-urls/{userId}')
    .onWrite(async (change, context) => {
      let newData = await change.after.data();
      db.doc(`jigmee-users/${newData.email}`).collection("history").doc(context.params.userId).set(newData);
    });
  // exports.addShortUrls = functions.https.onCall(async(data,context)=>{
  //   await db.doc(`jigmee-short-urls/${data.id}`).set(data);
  //   return "done1"
  // })
  // exports.userHistory = functions.https.onCall(async(data,context)=>{
  //   await db.doc(`jigmee-users/${data.email}`).collection("history").doc(data.id).set(data);
  //   this.addShortUrls(data);
  //   return "done2";
  // })
  exports.jigmeeUserAndShort = functions.https.onCall(async(data,context)=>{
    console.log("lol");
    // await db.doc(`jigmee-short-urls/${data.id}`).set(data);
    // await db.doc(`jigmee-users/${data.email}`).collection("history").doc(data.id).set(data);
    await db.doc(`jigmee-tests/${data.id}`).set(data);
    return "done2";
  })