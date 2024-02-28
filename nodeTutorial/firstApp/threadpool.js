// const fs= require('fs')
// console.log('first')
// fs.readFile("file.txt",'utf-8',(err,data)=>{
//     if(!err){
//         console.log(`the file contains: ${data}`)
//     }
// })

// console.log('last')//the output is async, node is able to do this beacuse of libuv's threadpool

const crypto= require('crypto')
// const start= Date.now()
// //synchronous method one after the other
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// console.log("Hash: ",Date.now()-start)

//asyn approach
//UV_THREADPOOL_SIZE= 5// changing the default size of the threadpool
const MAX_CALLS=6
const start= Date.now()
for(let i=0;i<MAX_CALLS;i++){
    //every call takes the same amount of time to execute, as they are executed parallely in libuvs thread
    crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
        console.log("Hash: ", Date.now()-start)
    })
}
//libuv's threadpool has 4 threadsso the first 4 iterations take almost similar time
//5 call is almost twice the time of first 4calls
//But we can increase the libuv's threadpool size
