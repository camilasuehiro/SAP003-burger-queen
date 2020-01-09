import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAoafAXpOVMxspSrfWuuG6O1eEliVzMwFU",
    authDomain: "sap003-burger-queen-a3a18.firebaseapp.com",
    databaseURL: "https://sap003-burger-queen-a3a18.firebaseio.com",
    projectId: "sap003-burger-queen-a3a18",
    storageBucket: "sap003-burger-queen-a3a18.appspot.com",
    messagingSenderId: "926074853010",
    appId: "1:926074853010:web:fef1b1ab1263df1fdf384b",
    measurementId: "G-T7CMXEP47F"
};

firebase.initializeApp(config);

export default firebase;