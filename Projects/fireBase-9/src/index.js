import { initializeApp } from 'firebase/app'
import{
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc, onSnapshot, query, where, orderBy,
    serverTimestamp, getDoc, updateDoc
} from 'firebase/firestore'

import{
    getAuth, createUserWithEmailAndPassword, signOut,
    signInWithEmailAndPassword, onAuthStateChanged
} from "firebase/auth"

import {
    
}

const firebaseConfig = {
    apiKey: "AIzaSyCGxb9S5M9H5dfjlE_81bMQuFHYKalj7-k",
    authDomain: "dbdemo-4a9d4.firebaseapp.com",
    projectId: "dbdemo-4a9d4",
    storageBucket: "dbdemo-4a9d4.appspot.com",
    messagingSenderId: "1007107132968",
    appId: "1:1007107132968:web:b48cf488b7a77c0118af1d"
  };

  //init firebase
  initializeApp(firebaseConfig)

  //init services
  const db= getFirestore()
  const auth= getAuth()
  //collection ref
  const collectionRef= collection(db,'books')
  //query
  const q= query(collectionRef, orderBy("createdAt"))
//   const query2= query(collectionRef, orderBy("author","asc"))

  //get collection data

//   getDocs(collectionRef)
//   .then((snapshot)=>{
//         let books=[]
//         snapshot.docs.forEach((doc)=>{
//             books.push({...doc.data(),id:doc.id})
//         })
//         console.log("get collection data: ",books)
//     })
//     .catch(err=> {
//         console.log(err.message)
//     })

  // real time collection data
  const unsubCollection= onSnapshot(q,(snapshot)=>{
    let books=[]
        snapshot.docs.forEach((doc)=>{
            books.push({...doc.data(),id:doc.id})
        })
        console.log("RealTime data: ", books)
  })

  // fetching single document from the db instead of the whole collection unlike the getDocs() and onSnapshot()
  const docRef= doc(db,"books",'PnhW1mxI06jo2Hw03wku')
  getDoc(docRef)
  .then((doc)=>{
    console.log(doc.data(), doc.id)
  })
  const unsubDocument= onSnapshot(docRef,(doc)=>{
    console.log(doc.data(), doc.id)
  })

  //adding a document
const addBookForm= document.querySelector('.add')
addBookForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    addDoc(collectionRef,{
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt: serverTimestamp()
    })
    .then(()=>{
        addBookForm.reset()
    })
})

//deleting a document
const deleteBookForm= document.querySelector('.delete')
deleteBookForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const docRef= doc(db,'books',deleteBookForm.bookId.value)
    deleteDoc(docRef)
    .then(()=>{
        deleteBookForm.reset()
    })
})


//updating a document
const updateForm= document.querySelector('.update')
updateForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const docRef= doc(db,'books',updateForm.id.value)
    updateDoc(docRef,{
        title:"Updated title"
    }).then(()=>{
        updateForm.reset()
    })
})

//signing up users
const signupForm= document.querySelector('.signup')
signupForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email= signupForm.email.value
    const password= signupForm.pwd.value
    createUserWithEmailAndPassword(auth,email,password)
    .then((cred)=>{
        console.log("User created:",cred.user)
        signupForm.reset()
    })
    .catch((err)=>{
        console.log(err.message)
    })
})

//logout user
const logoutButton= document.querySelector(".logout")
logoutButton.addEventListener("click",(e)=>{
    e.preventDefault()
    signOut(auth)
    .then(()=>{
        //console.log("the user is signed out")
    })
    .catch(err=> console.log(err.message))
})
//login
const loginForm= document.querySelector(".login")
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, loginForm.email.value, loginForm.pwd.value)
    .then((cred)=>{
        //console.log("User logged in", cred.user)
    })
    .catch(err=>{
        console.log(err.message)
    })
})

//subscribing to auth changes
const unsubAuthchange= onAuthStateChanged(auth,(user)=>{
    console.log("Usert state changed: ",user)
})

//unsub from changes
const unsubButton= document.querySelector(".unsub")
unsubButton.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("Unsubscribing")
    unsubCollection()
    unsubDocument()
    unsubAuthchange(    )
})