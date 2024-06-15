//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//console.log("app initialised.");

var serviceAccount = fetch(
  "../dailypics-a248c-firebase-adminsdk-kws1m-01e2a0facb.json"
);

var firebaseConfig = {
  apiKey: "AIzaSyAQLavuY2qrS_wD5QlIH_b985pwKpXNS5c",
  authDomain: "dailypics-a248c.firebaseapp.com",
  projectId: "dailypics-a248c",
  storageBucket: "dailypics-a248c.appspot.com",
  messagingSenderId: "478300328927",
  appId: "1:478300328927:web:be82673b9a1a08845d2a6a",
  measurementId: "G-FXN8YF33D4",
  credentials: serviceAccount,
  databaseURL:
    "https://console.firebase.google.com/project/undefined/firestore/data/",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var auth = firebase.auth();
var app = {
  db:db,
  auth:auth
}

export default app
