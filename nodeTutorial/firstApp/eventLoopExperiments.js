//inf1: all synchronous code takes priority over asynchronous code
console.log('1')
process.nextTick(()=>{
    console.log("This is process.next 1")
})
console.log('2')

//inf2
Promise.resolve().then(()=>{
    console.log("This is promise.resolve 1")
})