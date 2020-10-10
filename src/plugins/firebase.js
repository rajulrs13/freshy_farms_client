import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyAzw_X7GbYzvkdXOaSXGZ4CJ-tXct2v6qo",
  authDomain: "freshyfarms.firebaseapp.com",
  databaseURL: "https://freshyfarms.firebaseio.com",
  projectId: "freshyfarms",
  storageBucket: "freshyfarms.appspot.com",
  messagingSenderId: "860439627737",
  appId: "1:860439627737:web:62acffece1f5512958fbc8",
  measurementId: "G-SCZFVYL5K0",
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// export utils/refs
export { db, auth };
