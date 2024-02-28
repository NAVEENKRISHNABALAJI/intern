console.log("Start")
setTimeout(function cbT(){
    console.log("Call back timeout function")
},5000)

fetch("https://www.google.com").then(function cbF(){
    console.log("call back netflix")
})

console.log("End")