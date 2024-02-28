let counter=0
//setTimeOut runs the code with a time delay
setTimeout(incrementBy1,2000)

function incrementBy1(){
    counter++
    console.log(counter)
}

//setInterval repeatedly run cde at every time interval
const intervalId= setInterval(()=>{
    incrementBy1()
    if(counter===10){
        clearInterval(intervalId)
        console.log("Interval was cleared")
    }
},300)

const timoutId= setTimeout(()=>{
    window.location.href="https://google.com"
},2000)

const btn= document.getElementById("btn")
btn.addEventListener("click",function(){
    clearTimeout(timoutId)
    console.log("Redirect Cancelled")
})
