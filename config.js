import firebase from "firebase/compat"
require("@firebase/firestore")

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCASE8ERtgP006ye_J5tz8PC-g1LePRcaU",
    authDomain: "library-48b44.firebaseapp.com",
    projectId: "library-48b44",
    storageBucket: "library-48b44.appspot.com",
    messagingSenderId: "1091046607577",
    appId: "1:1091046607577:web:986c820234dc34c6ba0cc8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()