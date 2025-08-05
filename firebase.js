// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBtqayuoxeF-xOhkpR_MaxNVsAUvVPqsM",
  authDomain: "labzeta-finally.firebaseapp.com",
  projectId: "labzeta-finally",
  storageBucket: "labzeta-finally.appspot.com",
  messagingSenderId: "469242097545",
  appId: "1:469242097545:web:07e6d3bc43d978ae1cbb58",
  measurementId: "G-P3Y5ZG9VZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export for use in request.js
export { db };