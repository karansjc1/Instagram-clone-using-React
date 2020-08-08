import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAhklPJ3h662dgur2WY9EiUElvfFF2KCW4",
  authDomain: "instagram-clone-ks.firebaseapp.com",
  databaseURL: "https://instagram-clone-ks.firebaseio.com",
  projectId: "instagram-clone-ks",
  storageBucket: "instagram-clone-ks.appspot.com",
  messagingSenderId: "337262868596",
  appId: "1:337262868596:web:94658c3593b3fe981b3921",
  measurementId: "G-KKQC4XKKP8",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
