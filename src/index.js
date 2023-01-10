import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from "firebase/compat/app"
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCcwpKJQufL1ePHllWwrJQJ9wxjeW6XY_8",
  authDomain: "cart-c5597.firebaseapp.com",
  projectId: "cart-c5597",
  storageBucket: "cart-c5597.appspot.com",
  messagingSenderId: "705038107038",
  appId: "1:705038107038:web:5353e13a86efcb9ff6d68f"
};

firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
