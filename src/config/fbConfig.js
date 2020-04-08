import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAoU8aRCyLL6ElATfXYTysSZaulDP_zaQA",
    authDomain: "net-ninja-marioplan-d93b7.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-d93b7.firebaseio.com",
    projectId: "net-ninja-marioplan-d93b7",
    storageBucket: "net-ninja-marioplan-d93b7.appspot.com",
    messagingSenderId: "433251678570",
    appId: "1:433251678570:web:9a9d0c844199ab4edecd13",
    measurementId: "G-L44HP5EQQP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;