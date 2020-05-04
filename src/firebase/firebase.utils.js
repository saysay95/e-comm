import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB-kwmizE6StDy56mufTiILtWW3qMzFeL4",
    authDomain: "e-comm-aecdd.firebaseapp.com",
    databaseURL: "https://e-comm-aecdd.firebaseio.com",
    projectId: "e-comm-aecdd",
    storageBucket: "e-comm-aecdd.appspot.com",
    messagingSenderId: "192522507364",
    appId: "1:192522507364:web:d8b8a40297167d0dfd7b71",
    measurementId: "G-H6454WGEHH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;