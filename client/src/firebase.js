
  import firebase from "firebase";
  require('dotenv').config();

  const firebaseApp= firebase.initializeApp({
    apiKey:process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId:   process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
   
      // apiKey: "AIzaSyBaUPPs15soqekoiMgvOruEByDUNvOYoMw",
      // authDomain: "unicorn-capital-7afb9.firebaseapp.com",
      // projectId: "unicorn-capital-7afb9",
      // storageBucket: "unicorn-capital-7afb9.appspot.com",
      // messagingSenderId: "740414547460",
      // appId: "1:740414547460:web:665e0a94823693cb91b751",
      // measurementId: "G-S57T6XKYR7"
  });


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export { db, auth, storage };