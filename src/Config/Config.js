import * as firebase from 'firebase';

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDx5yRGjqelCFgGx-KoeoQjZrq31wh4GMI",
    authDomain: "heladeria-833e3.firebaseapp.com",
    projectId: "heladeria-833e3",
    storageBucket: "heladeria-833e3.appspot.com",
    messagingSenderId: "540576975383",
    appId: "1:540576975383:web:8b8b79e5987ca05a3f6a52",
    measurementId: "G-45NZBQDGE5"
};

firebase.initializeApp(firebaseConfig);


// const auth = fb.auth();
const auth = firebase.auth();
// const db = fb.firestore();
const db = firebase.firestore();
// const storage = fb.storage();
const storage = firebase.storage();

export { auth, db, storage }