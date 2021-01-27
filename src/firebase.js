import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBMSBYvJGQ_L1CRhMS2ihEUYlScgc729kI",
    authDomain: "linkedin-clone-4e05d.firebaseapp.com",
    projectId: "linkedin-clone-4e05d",
    storageBucket: "linkedin-clone-4e05d.appspot.com",
    messagingSenderId: "606833734384",
    appId: "1:606833734384:web:2d6fd85591764acb508835"
};

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }