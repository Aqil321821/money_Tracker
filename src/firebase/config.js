import firebase from 'firebase/app'
import 'firebase/firestore'


import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyADoQnxJfOFGBLHx1LCLmbjQRqXb-caGP8",
    authDomain: "mymoney-c68ba.firebaseapp.com",
    projectId: "mymoney-c68ba",
    storageBucket: "mymoney-c68ba.appspot.com",
    messagingSenderId: "963524739999",
    appId: "1:963524739999:web:dee0504ad7d4902fbcb3aa"
  };



  firebase.initializeApp(firebaseConfig);

  const projectFirestore= firebase.firestore();
  const projectAuth = firebase.auth();
  // timestamp
const timestamp = firebase.firestore.Timestamp

  export{projectFirestore, projectAuth,timestamp}