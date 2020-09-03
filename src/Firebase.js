import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAOzfrVWVM6alGtIN5lw3Ibo3UT9ZKRAZk",
    authDomain: "kisanfeedback-b2c73.firebaseapp.com",
    databaseURL: "https://kisanfeedback-b2c73.firebaseio.com",
    projectId: "kisanfeedback-b2c73",
    storageBucket: "kisanfeedback-b2c73.appspot.com",
    messagingSenderId: "645459631660",
    appId: "1:645459631660:web:46f70000879f7f0177fb89",
    measurementId: "G-ZW80NCCNXJ"
  
  };
firebase.initializeApp(config);
// firebase.firestore();
// firebase.storage();
// firebase.database()

export default firebase;