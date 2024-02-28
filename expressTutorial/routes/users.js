const express= require('express')
const { homepage } = require('../controllers/users')
const { newUsers } = require("../controllers/users")
const router= express.Router()
router.use(logger)

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

router.get('/',homepage)

router.get("/new",newUsers)

router.post('/',(req,res)=>{
    const isvalid = true
    if(isvalid){
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length-1}`)
    }else{
        console.log("Error")
        res.render("users/new",{firstName: req.body.firstName})
    }
    console.log(req.body.firstName)
    //res.send("Hi")
})

// router.get('/:userId',(req,res)=>{ //dynamic routes
//     //accessing from param req.params.userId
//     res.send(`User get id${req.params.userId}`)
// })
// router.put('/:userId',(req,res)=>{ //dynamic routes
//     //accessing from param req.params.userId
//     res.send(`User update id${req.params.userId}`)
// })
// router.delete('/:userId',(req,res)=>{ //dynamic routes
//     //accessing from param req.params.userId
//     res.send(`User delete id${req.params.userId}`)
// })

//ec]xpress has route() method on which we can chain all methods of url/http
//same as above except we will define all routes in a single place
router
.route("/:id")
.get((req,res)=>{ //dynamic routes
    //accessing from param req.params.userId
    res.send(`User get id${req.params.userId}`)
})
.put((req,res)=>{ //dynamic routes
    //accessing from param req.params.userId
    res.send(`User update id${req.params.userId}`)
})
.delete((req,res)=>{ //dynamic routes
    //accessing from param req.params.userId
    res.send(`User delete id${req.params.userId}`)
})
const users=[{name:"Sally"},{name:"Kyle"}]
router.param("userId",(req,res,next,userId)=>{
    console.log(userId)
    req.user=users[id]
    next()
})



module.exports = router
//dynamic routes should always be last as express executes from top 