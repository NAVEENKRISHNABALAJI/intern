function sayHello(name){
    console.log(`Hello ${name}!`)
}
sayHello("Mosh")
//console is global object
//global objects
// setTimeout
// clearTimeout
// setInterval
// clearInterval
console.log(module)

const log= require('./logger')
//  console.log(log)

console.log(log("Log messge from the server"))

//node always wraps the code into the module function while copiling the source code
console.log(__filename)
console.log(__dirname)

const path= require('path')
let pathObject= path.parse(__filename)
console.log("\n\n")
console.log(pathObject)

const os= require('os')
let totalMemory= os.totalmem()
let freeMemory= os.freemem()
console.log(`Total memory:${totalMemory} \nFree memory:${freeMemory}`  )

const fs= require('fs')
let files= fs.readdirSync('./')
console.log(files)

let filesUsingAsyncMethod= fs.readdir('./',function(err,files){
    if(err) 
    console.log('Error',err)
    else console.log('Result',files)

})
console.log(filesUsingAsyncMethod)

const EventEmitter= require('events')//class
const emitter= new EventEmitter()

//register a listener
emitter.on('messageLogged',function(arg){
    console.log('Listener called',arg)
})
//Raise an event
emitter.emit('messageLogged',{id:1,url:'https://www.google.com'})

emitter.on("logging",(args)=>{
    console.log("Logged in",args)
})
emitter.emit("logging",{data:"Requesting to log in"})