// firebase-config.js (Compat Version)
const firebaseConfig = {
  apiKey: "AIzaSyAu1bgs7bgabo0ED2Py-zK3f9NzdwvdYfM",
  authDomain: "shredfx-bea9a.firebaseapp.com",
  projectId: "shredfx-bea9a",
  storageBucket: "shredfx-bea9a.firebasestorage.app",
  messagingSenderId: "548515644851",
  appId: "1:548515644851:web:42991315615cf1265937c6",
  measurementId: "G-4KW0B1NS1F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make auth and db globally available
const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Optional: Set Google provider custom parameters
googleProvider.setCustomParameters({
  prompt: 'select_account'
});