const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const {initializeApp} = require('firebase/app')
const {getAuth, createUserWithEmailAndPassword, signOut,
  signInWithEmailAndPassword, onAuthStateChanged, signInWithCredential} = require('firebase/auth')
const{ getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc, onSnapshot, query, where, orderBy,
  serverTimestamp, getDoc, updateDoc}= require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyB-Zvud5D5wrUr7_I-DL6TESo4Ze1n81Hc",
    authDomain: "gameguidez-7f5b2.firebaseapp.com",
    projectId: "gameguidez-7f5b2",
    storageBucket: "gameguidez-7f5b2.appspot.com",
    messagingSenderId: "67964805230",
    appId: "1:67964805230:web:4b38dd9f347c804250067f",
    measurementId: "G-VL4HL38FQ0"
  };

  //init firebase
  initializeApp(firebaseConfig)
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const auth= getAuth()
const db= getFirestore()
const collectionRef= collection(db,'users')
// Routes
// Home Page Route with buttons for signup and login
app.get('/', (req, res) => {
  res.send("Home Page")
});

// Signup Page Route
app.get('/signup', (req, res) => {
  // res.sendFile("C:/Users/nbalaji/Desktop/Projects/Task2-views/views/signup.html")
});

app.post('/signup', async (req, res) => {
  // Handle signup form submission here
  const { email, password } = req.body;
  console.log(email,password)
  await createUserWithEmailAndPassword(auth,email,password)
    .then((cred)=>{
        console.log("User created:",cred.user)
        // signupForm.reset()
    })
    .catch((err)=>{
        console.log(err.message)
    })
    await addDoc(collectionRef,{
      username: email,
      createdAt: serverTimestamp()
  })
    console.log(`User with email ${email}-${password} created successfully!`);
    // res.redirect("/login")
    return res.json({"message": "Success"});
});

// Login Page Route
app.get('/login-test', (req, res) => {
    res.send("<h1>User created proceed to  login.... </h1>")
});

app.post('/login', (req, res) => {
  // Handle login form submission here
  const { email, password } = req.body;
  // Example: Authenticate user
  signInWithEmailAndPassword(auth, email, password)
    .then((cred)=>{
        console.log("User logged in", cred.user.metadata)
    })
    .catch(err=>{
        console.log(err.message)
    })
  console.log(`User with email ${email} logged in successfully!`);
  res.redirect("/")
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


