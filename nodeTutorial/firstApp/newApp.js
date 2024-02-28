// console.log("Hello World\n")
// let a=3,b=4
// console.log(a+b)
const superHer0={
    firstName:"Bruce",
    lastName:"Wayne"
}
var http= require('http')
const server= http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'application/json'})
    res.write("Welcome Back!\n")
    res.write(JSON.stringify(superHer0))
    res.end()
})

server.listen(9000)
console.log("Listening to port: 9000")