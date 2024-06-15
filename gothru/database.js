import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import logger from "./logger";

const firebaseConfig = {
    apiKey: "AIzaSyDYZirdnjur9VqfgskPxb0D2Jo9D4E21HU",
    authDomain: "gothru-aa793.firebaseapp.com",
    projectId: "gothru-aa793",
    storageBucket: "gothru-aa793.appspot.com",
    messagingSenderId: "93165224089",
    appId: "1:93165224089:web:199506152c37592cacb808",
    measurementId: "G-4MCB7RZFPX"
};

logger.log(logger.INFO, "database", "initialize firebase app");
const app = initializeApp(firebaseConfig);

let analytics;
if(isSupported()){
    logger.log(logger.INFO, "database", "initialize analytics");
    analytics = getAnalytics(app);
} else {
    analytics = null;
}

class database {
    constructor(){
        this.analytics = analytics;
        this.firestore = getFirestore(app);
        this.auth = getAuth(app);
    }
}

export default new database();
