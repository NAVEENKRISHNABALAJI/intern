const express= require('express')
const app= express()
const customError= require("./customError")
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.set("view engine","ejs")

// app.get("/",(req,res)=>{
//     console.log("Here")
//     // res.send("Heeloo")
//     // res.sendStatus(500)
//     // res.status(500).send("INternal server error message")
//     // res.json({'message':"error"})
//     // res.download('server.js')
//     res.render('index',{text:"World"})
// })

const userRouter= require("./routes/users")
app.use("/users", userRouter)
app.use("/users/new", userRouter)
app.all('*',(req,res,next)=>{
    // const err= new Error(`Can't find ${req.originalUrl} on the server`)
    // err.status="Fail"
    // err.statusCode=404
    // next(err)
    const err= new customError(`Can't find ${req.originalUrl} on the server`,404)
    next(err)
})
app.use((error,req,res,next)=>{
    error.statusCode= error.statusCode||500
    error.status= error.status||"Error"
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message
    })
})

app.listen(3000)

