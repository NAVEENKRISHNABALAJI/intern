const express= require('express')
const path= require('path')

const app= express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('./'))
app.post('/contact',(req,res)=>{
    //res.send("<h1>Hello from express!!</h1>")
    //res.send(req.header('host'))
    //res.send(req.header('user-agent'))
    //res.send(req.rawHeaders) allthe 4 for index'/' in get method
    if(!req.body.name){
        return res.status(400).send("Name is required")
    }
    //Database stuff
    res.status(201).send(`Thank you ${req.body.name}`)
})
//autorising cases like login
app.post('/login',(req,res)=>{
    if(!req.header('x-auth-token')){
        return res.status(400).send("No token")
    }

    if(req.header('x-auth-token')!=='123456'){
        return res.status(401).send("Not authorised")
    }

    res.send("Logged in!")
})
//appending
app.put('/post/:id',(req,res)=>{
    //DATABASE stuff
    res.json({
        id: req.params.id,
        title: req.body.title
    })
})

app.delete('/post/:id',(req,res)=>{
    res.json({msg: `Post ${req.params.id} deleted`})
})

app.listen(5001,()=> console.log("Server:-> listening to port 5001"))