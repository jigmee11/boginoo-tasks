
import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBH4Fdvtep5Jw1Syw8uZLyOvDAXv7JGDtA",
  authDomain: "boginoo-2d962.firebaseapp.com",
  projectId: "boginoo-2d962",
  storageBucket: "boginoo-2d962.appspot.com",
  messagingSenderId: "281510281989",
  appId: "1:281510281989:web:9593f3aa0d26e2a60ded6c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore()
let storage = firebase.storage();
let auth = firebase.auth();

export {
  firebase, db, storage,auth
}