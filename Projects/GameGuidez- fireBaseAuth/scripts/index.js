//firebase connection
import initializeApp from 'firebase/app'
import firestore from 'firebase/firestore'
import auth from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyB-Zvud5D5wrUr7_I-DL6TESo4Ze1n81Hc",
    authDomain: "gameguidez-7f5b2.firebaseapp.com",
    projectId: "gameguidez-7f5b2",
    storageBucket: "gameguidez-7f5b2.appspot.com",
    messagingSenderId: "67964805230",
    appId: "1:67964805230:web:4b38dd9f347c804250067f",
    measurementId: "G-VL4HL38FQ0"
  };
  firebase.initializeApp(firebaseConfig)
//index.js from fbauth nn
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });

//auth.js from fbauth nn
  //signup
const signupForm = document.querySelector("#signup-form")
signupForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    //get user info

    const email= signupForm['signup-email'].value
    const password= signupForm['signup-password'].value
    console.log(email, password)
})