import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'clone-6ca51.firebaseapp.com',
    projectId: 'clone-6ca51',
    storageBucket: 'clone-6ca51.appspot.com',
    messagingSenderId: '492803022971',
    appId: '1:492803022971:web:60116cc73f87dd4334c2de',
    measurementId: 'G-3G469PPQPG',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
