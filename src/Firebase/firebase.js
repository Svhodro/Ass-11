// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB8Yn0_hH96JQeyGILBIDvsV34-O7Vliqc",
  authDomain: "fir-198b8.firebaseapp.com",
  projectId: "fir-198b8",
  storageBucket: "fir-198b8.appspot.com",
  messagingSenderId: "671383647403",
  appId: "1:671383647403:web:e3b2133a9626e5ef7633ee",
  measurementId: "G-VFP0MLXRW8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}