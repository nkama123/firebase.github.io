import firebase from 'firebase';

  const Config = {
    apiKey: "AIzaSyC6pEaSE6D4gT_rSW2Cb3fvLjxFRZmDFp4",
    authDomain: "codetribe-5f621.firebaseapp.com",
    projectId: "codetribe-5f621",
    storageBucket: "codetribe-5f621.appspot.com",
    messagingSenderId: "54718521111",
    appId: "1:54718521111:web:b4219bb23c6b36f3d76152",
    measurementId: "G-SZHT90M7MW"
};
  // Initialize Firebase
  firebase.initializeApp(Config);
  export default firebase