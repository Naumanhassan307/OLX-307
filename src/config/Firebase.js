
import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyCuMopNJ1Y4BUVnaIuQS48BEJDIdmEv-k4",
  authDomain: "olx-307.firebaseapp.com",
  projectId: "olx-307",
  storageBucket: "olx-307.appspot.com",
  messagingSenderId: "269317011786",
  appId: "1:269317011786:web:0d2519f0cd50fda19069b3",
  measurementId: "G-V62CL6LVEM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()