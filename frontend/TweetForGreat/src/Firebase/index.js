import firebase from 'firebase/app';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyCD_6RARd6J-pLh6W0jF79iF0WvgcnKZsc",
    authDomain: "scrapsnap-z.firebaseapp.com",
    databaseURL: "https://scrapsnap-z.firebaseio.com",
    projectId: "scrapsnap-z",
    storageBucket: "scrapsnap-z.appspot.com",
    messagingSenderId: "1024414274435",
    appId: "1:1024414274435:web:beb547120e796abd9d9cb6",
    measurementId: "G-SJ5KYG6HDG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const storage = firebase.storage();
  export{
        storage, firebase as default
  }