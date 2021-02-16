import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyAKMN9hObG8ksT1GCmuYOLt1bFNDPkrPXw",
    authDomain: "clone-9acd1.firebaseapp.com",
    projectId: "clone-9acd1",
    storageBucket: "clone-9acd1.appspot.com",
    messagingSenderId: "454427812578",
    appId: "1:454427812578:web:95595cb276ceb537d674bb",
    measurementId: "G-GLBTNB346H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };