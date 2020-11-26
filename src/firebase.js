import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4aDaAfZ2284shXWfx2e_F-u0zm-Uii8A",
    authDomain: "hemstodo-71bd1.firebaseapp.com",
    databaseURL: "https://hemstodo-71bd1.firebaseio.com",
    projectId: "hemstodo-71bd1",
    storageBucket: "hemstodo-71bd1.appspot.com",
    messagingSenderId: "709031930708",
    appId: "1:709031930708:web:fa59f25ae401862e3136c1",
    measurementId: "G-3SEHBQHZWZ"
});

const db =firebaseApp.firestore();



export default db;