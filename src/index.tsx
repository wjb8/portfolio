import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8jI5y5Pv_l6NDoKxE-pKGv2BZvZgnRic",
  authDomain: "portfolio-673da.firebaseapp.com",
  projectId: "portfolio-673da",
  storageBucket: "portfolio-673da.appspot.com",
  messagingSenderId: "212985472658",
  appId: "1:212985472658:web:d4e31944344f8d8973684b",
  measurementId: "G-2T5QX5ECML",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase);
export const storage = getStorage(firebase);
export const analytics = getAnalytics(firebase);

ReactDOM.render(
  <React.StrictMode>
    {/* TODO - add loading page */}
    {/* <Suspense fallback={<LoadingPage />}> */}
    <App />
    {/* </Suspense> */}
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
