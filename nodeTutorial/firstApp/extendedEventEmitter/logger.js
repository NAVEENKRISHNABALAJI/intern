const EventEmitter= require('events')
let url= 'https://mylogger.io/log'
class Logger extends EventEmitter{
    log(message){//method
        //send http request
        console.log(message)
        //raising an event
        this.emit('messageLogged',{id:1,url:"https://www.google.com"})
    }
}


module.exports=Logger