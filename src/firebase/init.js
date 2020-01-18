import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "",
    authDomain: "realtime-chat-bf225.firebaseapp.com",
    databaseURL: "https://realtime-chat-bf225.firebaseio.com",
    projectId: "realtime-chat-bf225",
    storageBucket: "realtime-chat-bf225.appspot.com",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

 // firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore()