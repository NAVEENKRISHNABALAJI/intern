const express= require("express")
const app=express()

let uname= "Naveen"
let pwd= 12345

app.get("/",(req,res)=>{
    res.send("<H1>Trimble!!</H1>")
})

app.get("/login",(req,res)=>{
    res.send("Hello from trimble login page")
})
app.use(loginMiddleware)
app.get("/profilePage",(req,res)=>{
    res.send("Profile Page")
})

app.get("/feedPage",(req,res)=>{
    res.send("Feed Page")
})
app.listen(8000,()=>{
    console.log("Server listening port:8000")
})

function loginMiddleware(req,res,next){
    console.log("Log in middleware activated")
    if("Naveen"==uname && 123435==pwd){
        next()
    }
    else{
        res.send("Cannot Authenticate the user!")
    }
    
}