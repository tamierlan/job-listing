import app from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBMPTQl4WECjhlhrCGYi7KS4BhJ7YVNuj0",
  authDomain: "job-listing-db2c3.firebaseapp.com",
  projectId: "job-listing-db2c3",
  storageBucket: "job-listing-db2c3.appspot.com",
  messagingSenderId: "500247323375",
  appId: "1:500247323375:web:7acb0898929b2b63cbb11a",
  // measurementId: "G-5HHJXH7KNR"
};

const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

// firebase.analytics();

export { firebase, firestore, app };
