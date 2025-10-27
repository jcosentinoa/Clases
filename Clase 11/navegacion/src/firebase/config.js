import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZWZheS9QwjlR37V7yupMn1xtpIN3Li6o",
    authDomain: "clase-11-443aa.firebaseapp.com",
    projectId: "clase-11-443aa",
    storageBucket: "clase-11-443aa.firebasestorage.app",
    messagingSenderId: "603908153971",
    appId: "1:603908153971:web:4a52e84da09039f6ad0006"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();
