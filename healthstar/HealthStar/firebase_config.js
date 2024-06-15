import * as firebase from "@firebase/app";
import * as _auth from "@firebase/auth";
import * as _firestore from "@firebase/firestore";
import localdb from "./backend/localdb";

const firebaseConfig = {
  apiKey: "AIzaSyCKuHBEQopUsR6YNAqzbwlB8XQ3ddW5zP8",
  authDomain: "healthstar-e439e.firebaseapp.com",
  projectId: "healthstar-e439e",
  storageBucket: "healthstar-e439e.appspot.com",
  messagingSenderId: "27072008479",
  appId: "1:27072008479:web:3b5f6e0fdbf2376b1e602a",
  measurementId: "G-F5C8QG3FGQ",
};

firebase.initializeApp(firebaseConfig);
const auth = _auth.getAuth();
const db = _firestore.getFirestore();

localdb.auth = auth;
localdb.db = db;

_auth.onAuthStateChanged(auth, (user) => {
  if (user) {
    localdb.currentUser = user;
  } else {
    localdb.currentUser = null;
  }
});

_auth.signInWithCredential(auth, 
  _auth.GoogleAuthProvider.credential("eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3Y2MwZWY0YzcxODFjZjRjMGRjZWY3YjYwYWUyOGNjOTAyMmM3NmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyNzA3MjAwODQ3OS10dG12M2pnYjd0OWtzcWVpdG9qY2o3NDAwc3A3cGtxMy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjI3MDcyMDA4NDc5LXR0bXYzamdiN3Q5a3NxZWl0b2pjajc0MDBzcDdwa3EzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAzNjE0NDI4MjIyOTgxMjU2MDk2IiwiZW1haWwiOiJsZWVuYWdhamJoaXllMTAwM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibm9uY2UiOiI1MDFkNmNiMzQ5ZGJlOTAxNTZmZGJlMmYxNTVmNzc3MDAyZjZkNzUxZjM0Y2UzMDEzOWYwMGRlODc5OTljM2E5IiwibmFtZSI6ImxlZW5hIGdhamJoaXllIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FMbTV3dTJ6SThCVFEwMDZ5LWFnTDF3OFFBQmY1WVV5QzYweUlCM2hqTmVuPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6ImxlZW5hIiwiZmFtaWx5X25hbWUiOiJnYWpiaGl5ZSIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjY3MTMwNDEyLCJleHAiOjE2NjcxMzQwMTIsImp0aSI6Ijg4NGE3MWU0OTY5ZjUzMzA1MDI2NWEwNDJjYjY0ZjI2M2ZjNzRjMDQifQ.DNT5TLikUfxu9lvruTD65eqvlyUFFMfNdO-lNM9rPyQEGeV_S1vopRjAtVaq9zfHQgwjSEBWlG266cxFvHyBHoTzZ1gp9udooSXHzDI0KUZT3obrppb7PsYG3PhvrbEBsqNZ2y3vLH-wM9cbgQHxyQdL2_3DR-kZxW9mpRM1DETJf3tA_nFevgbukkCy2t--CoSYusDAjTuIwuxZxm-7JjJcL0c7UUWeClGu54Fw50pNIa4ytyY6qi98TZ3QF2VC2laFT-UFhawbXCJ0lnwCXsHDSQRDvyiH_hKsfoQtDnHFOekDpazvlF9fvS--GoWq9PmD8GAvTmHn5x0lIxELOw")  
)

export default {
    firebase: firebase,
    _auth: auth,
    _db: db,
    firestore: ()=> {return _firestore},
    auth: ()=> {return _auth},
};
