
import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBCK1oiI1jFb7Rx4oD6DbArJ3g_aEmv9k0",
  authDomain: "app4-e6c1d.firebaseapp.com",
  projectId: "app4-e6c1d",
  storageBucket: "app4-e6c1d.appspot.com",
  messagingSenderId: "779512620120",
  appId: "1:779512620120:web:8b9b2658a64931a870162d",
  measurementId: "G-KTDCMPXLVT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore()
let storage = firebase.storage();
let auth = firebase.auth();

export {
  firebase, db, storage,auth
}