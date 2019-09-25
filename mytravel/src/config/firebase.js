import app from "firebase/app"
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCFPHjvjA2kCJTVAPvg8v57FymM9NjnDlc",
    authDomain: "mytravel-96d22.firebaseapp.com",
    databaseURL: "https://mytravel-96d22.firebaseio.com",
    projectId: "mytravel-96d22",
    storageBucket: "mytravel-96d22.appspot.com",
    messagingSenderId: "672178870039"
};

app.initializeApp(config);
app.firestore()

export const storage = app.storage()

export default app;
