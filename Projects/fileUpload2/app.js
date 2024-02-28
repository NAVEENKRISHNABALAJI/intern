const express= require('express')
const multer= require('multer')
const ejs= require('ejs')
const path= require('path')

//set storage engine
const storage= multer.diskStorage({
    destination:"./public/uploads/",
    filename: function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+ path.extname(file.originalname))
    }
})

//upload variable
const upload= multer({
    storage: storage,
    limits:{fileSize:1000000}
}).single('myFile')

//Initiating app
const app= express()
const port= 4300

//ejs
app.set("view engine", 'ejs')
//public for static html css js
app.use(express.static("./public"))

//home route
app.get("/",(req,res)=>{
    res.render('index')
})

//uploads route
app.post("/upload",(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.render('index',{
                msg:err
            })
        }
        else{
            if(req.file==undefined){
                res.render('index',{
                    msg:"Error: No file selected!"
                })
            }
            else{
                res.render('index',{
                    msg:"File Uploaded!!",
                    file:`uploads/${req.file.filename}`
                })
            }
        }
    })
})

app.listen(port,()=> console.log(`Server started on port ${port}`))