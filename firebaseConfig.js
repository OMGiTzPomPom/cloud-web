// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3V4gL5TD_NYAYDT4Ar4YugorWi2Q6tYY",
    authDomain: "web-cloud-ynov-adfc3.firebaseapp.com",
    projectId: "web-cloud-ynov-adfc3",
    storageBucket: "web-cloud-ynov-adfc3.appspot.com",
    messagingSenderId: "686853011804",
    appId: "1:686853011804:web:407da71f31a35e2c9f6999",
    measurementId: "G-Z6XVRWT6VP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;