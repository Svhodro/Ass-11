// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyA1ZZMlBvpBcgXPilqsuPZZIoU8jEtNdUU" ,
  authDomain:"ass-11-34cd2.firebaseapp.com" ,
  projectId:"ass-11-34cd2",
  storageBucket:"ass-11-34cd2.appspot.com" ,
  messagingSenderId:"1027152339525" ,
  appId:"1:1027152339525:web:bc8ddf0b6b7d8f2666392c",
  measurementId:"G-Q57T3B008K"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}