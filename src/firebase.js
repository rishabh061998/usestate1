import firebase from "firebase/compat/app";
import "firebase/compat/database";





var firebaseConfig = {
    apiKey: "AIzaSyAWShwZ9L5NHlhb1BYehSg_uvNAdvCGSlY",
    authDomain: "react-contact-781b9.firebaseapp.com",
    projectId: "react-contact-781b9",
    storageBucket: "react-contact-781b9.appspot.com",
    messagingSenderId: "571389169175",
    appId: "1:571389169175:web:853fb46d74d8a147741652"
  };

  const fireDb=firebase.initializeApp(firebaseConfig)

  export default fireDb.database().ref();