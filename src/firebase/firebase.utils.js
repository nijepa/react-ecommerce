import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDqW6NxjaHgkLLUAsvIX0L4sl00PergdyM",
    authDomain: "ecommerce-db-7b3e4.firebaseapp.com",
    databaseURL: "https://ecommerce-db-7b3e4.firebaseio.com",
    projectId: "ecommerce-db-7b3e4",
    storageBucket: "ecommerce-db-7b3e4.appspot.com",
    messagingSenderId: "236783336534",
    appId: "1:236783336534:web:8acf975344dcdf76980ff7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
