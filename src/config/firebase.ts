// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBrP9bZrJQFf7eg4AFIN3mQbZXO7q-o0pw",
    authDomain: "react-pos-f1920.firebaseapp.com",
    projectId: "react-pos-f1920",
    storageBucket: "react-pos-f1920.appspot.com",
    messagingSenderId: "266797595027",
    appId: "1:266797595027:web:e4fb67258cf9a3fe2c5066",
    measurementId: "G-NP754B9B3D"
};
const app =initializeApp(firebaseConfig);
const storage = getStorage(app);
export {storage};