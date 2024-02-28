// call back function enables async features in synchronous js language
setTimeout(function(){
    console.log("timer")
},5000)
function x(y){
    console.log('x')
    y()
}
x(function y(){console.log('y')})//y is a callback
//callstack can be called the mainthread of javascript