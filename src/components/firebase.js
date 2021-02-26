
import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCJMThfQoW8SFkx9xW3FKCvygmOvGrgiR8",
  authDomain: "short-1.firebaseapp.com",
  projectId: "short-1",
  storageBucket: "short-1.appspot.com",
  messagingSenderId: "649886963056",
  appId: "1:649886963056:web:93b095eeb028afc279abb5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore()
let storage = firebase.storage();
let auth = firebase.auth();

export {
  firebase, db, storage,auth
}