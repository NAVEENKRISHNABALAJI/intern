const express= require('express')
const app = express()
const cors= require('cors')
//const bodyParser= require('body-parser')
const port=4200
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({origin:'*'}))
//app.use(bodyParser.json())
const {initializeApp}= require('firebase/app')
const {getFirestore, collection, addDoc, deleteDoc, getDocs, serverTimestamp}= require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCGxb9S5M9H5dfjlE_81bMQuFHYKalj7-k",
    authDomain: "dbdemo-4a9d4.firebaseapp.com",
    projectId: "dbdemo-4a9d4",
    storageBucket: "dbdemo-4a9d4.appspot.com",
    messagingSenderId: "1007107132968",
    appId: "1:1007107132968:web:b48cf488b7a77c0118af1d"
};

initializeApp(firebaseConfig)
const db= getFirestore()
const collectionRef= collection(db,'Todo')

//app routes
app.post('/newTask', async(req,res)=>{
    const { task } = req.body;
    console.log(task)
    await addDoc(collectionRef,{
        task: task,
        createdAt: serverTimestamp()
    }).then(()=>{
        res.send("New task added")
    })
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}...`)
})