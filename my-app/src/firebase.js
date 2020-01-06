import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBnnfZxA3HAWBfVG3nI47R1MpeOOgu161I",
    authDomain: "sap003-burger-queen-35534.firebaseapp.com",
    databaseURL: "https://sap003-burger-queen-35534.firebaseio.com",
    projectId: "sap003-burger-queen-35534",
    storageBucket: "sap003-burger-queen-35534.appspot.com",
    messagingSenderId: "198971468115",
    appId: "1:198971468115:web:f2b3031dc48d7ab94359a6",
    measurementId: "G-VBR21ZYXHT"
};

firebase.initializeApp(config);

export default firebase;