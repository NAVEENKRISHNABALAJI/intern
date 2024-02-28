const express= require('express')
const path= require('path')
const app= express()
const methodOverride= require('method-override')
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

const { v4: uuid } = require('uuid');

let comments=[
    {
        id:uuid(),
        username:'Todd',
        comment:'Lol that is very funny'
    },
    {
        id:uuid(),
        username:'Skyler',
        comment:'I would like to go birdwatching with my dog'
    },
    {
        id:uuid(),
        username:'sk8erBoi',
        comment:'Plz delete your account Todd'
    },
    {
        id:uuid(),
        username:'onlysaywoof',
        comment:'woof woof woof'
    }
]

app.get("/comments",(req,res)=>{
    res.render('comments/index',{comments})
})

app.get("/comments/new",(req,res)=>{
    res.render('comments/new')
})

app.post('/comments',(req,res)=>{
    const {username, comment}= req.body
    comments.push({username, comment, id:uuid()})
    console.log(req.body)
    res.redirect('/comments')
})

app.get('/comments/:id',(req,res)=>{
    const{ id }= req.params
    const comment= comments.find(c => c.id=== id)
    res.render('comments/show',{comment})

})

app.patch('/comments/:id',(req,res)=>{
    const {id}= req.params
    const newText= req.body.comment
    const idComment= comments.find(c => c.id=== id)
    idComment.comment= newText
    res.redirect("/comments")
})

app.get("/comments/:id/edit",(req,res)=>{
    const {id}= req.params
    const comment= comments.find(c => c.id=== id)
    res.render("comments/edit",{comment})
})

app.delete('/comments/:id',(req,res)=>{
    const {id}= req.params
    const foundComment= comments.find(c => c.id=== id)
    comments= comments.filter(c => c.id != id)
    res.redirect('/comments')
})

app.get("/tacos",(req,res)=>{
    res.send("GET /tacos response")
})

app.post("/tacos",(req,res)=>{
    const {meat,qty}=req.body
    res.send(`Ok here are your ${qty} ${meat} tacos`)
})

app.listen(8000,()=>{
    console.log("Listening port 8000...")
})