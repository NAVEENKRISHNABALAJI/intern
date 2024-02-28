const express= require("express")
const multer= require("multer")
const cors= require("cors")

const app= express()
app.use(cors())//allows incomming request from ips

const uploads= multer({dest:__dirname+"/uploads"})


app.post("/uploads",uploads.array("files"),(req,res)=>{
    console.log(req.body)
    console.log(req.files)
    res.json({status:"files received"})
})

app.listen(6000,()=>{
    console.log("Server running on port 6000")
})