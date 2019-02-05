import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCFPHjvjA2kCJTVAPvg8v57FymM9NjnDlc",
    authDomain: "mytravel-96d22.firebaseapp.com",
    databaseURL: "https://mytravel-96d22.firebaseio.com",
    projectId: "mytravel-96d22",
    storageBucket: "mytravel-96d22.appspot.com",
    messagingSenderId: "672178870039"
};

firebase.initializeApp(config);
firebase.firestore()

export default firebase;
