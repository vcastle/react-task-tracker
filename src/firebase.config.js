import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA4zqFOnUPGkkD2UZ_4ARXk54rjSjstQbQ",
    authDomain: "exercise-tracker-react.firebaseapp.com",
    projectId: "exercise-tracker-react",
    storageBucket: "exercise-tracker-react.appspot.com",
    messagingSenderId: "818572245470",
    appId: "1:818572245470:web:945650fa7b79bbbbc8454f",
    measurementId: "G-2P08VTFSML"
  };
  
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;