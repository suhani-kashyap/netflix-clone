import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5hHjcuXMTDLmzpp2RGJQ6tugo1Eay9-4",
    authDomain: "netflix-clone-da1be.firebaseapp.com",
    projectId: "netflix-clone-da1be",
    storageBucket: "netflix-clone-da1be.appspot.com",
    messagingSenderId: "453933513215",
    appId: "1:453933513215:web:bb707719cb7d21d3d94fca"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); // The database
const auth = firebase.auth();

export {auth};
export default db;
