const express= require("express")
const path= require("path")
const app= express()

app.use(express.static("public"))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/random",(req,res)=>{
    const num= Math.floor(Math.random()*10 +1)
    res.render("random",{num})
})
app.get("/r/:subreddit",(req,res)=>{
    const {subreddit}=req.params
    res.render("subreddit",{subreddit})
})
app.get("/cats",(req,res)=>{
    const cats=['monty','bkue','moon']
    res.render('cats',{allcats:cats})
})

app.listen(3500,()=>{
    console.log("Listening to port 3000...")
})