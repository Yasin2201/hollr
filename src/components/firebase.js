import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBukyt4EroXxaVMBVOP7Nh6uYwfdpqY3WE",
    authDomain: "holl-r.firebaseapp.com",
    projectId: "holl-r",
    storageBucket: "holl-r.appspot.com",
    messagingSenderId: "8271554529",
    appId: "1:8271554529:web:4376a6890037eb6d6294a0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase