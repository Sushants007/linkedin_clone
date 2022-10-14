import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJql43Ui7nLERZWPFPDx9dm_87AJa3trg",
    authDomain: "linkedin-clone-8d445.firebaseapp.com",
    projectId: "linkedin-clone-8d445",
    storageBucket: "linkedin-clone-8d445.appspot.com",
    messagingSenderId: "538705148097",
    appId: "1:538705148097:web:3c24dc87f42de341e73c40"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth()

  export{db,auth};
