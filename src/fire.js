import firebase from 'firebase';  

var config = {
    apiKey: "AIzaSyAEGu2utX5f5HyY7RvmKKez83ZrsS16Su4",
    authDomain: "collabedit-156d9.firebaseapp.com",
    databaseURL: "https://collabedit-156d9.firebaseio.com",
    projectId: "collabedit-156d9",
    storageBucket: "collabedit-156d9.appspot.com",
    messagingSenderId: "106886420659"
  };

  var fire=firebase.initializeApp(config);
  export default fire;