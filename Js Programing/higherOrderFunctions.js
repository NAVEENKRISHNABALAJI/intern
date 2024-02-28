function callTwice(func)
{
    func()
    func()
}
function rollDice(){
    const roll= Math.floor(Math.random()*6)+1
    console.log(roll)
}

function callTenTimes(f){
    for(let i=0;i<10;i++)
    {
        //f()
    }
}


callTwice(rollDice)
callTenTimes(rollDice)

//returning a function
function mysteryFunction(){
    const num= Math.floor(Math.random()*5)+1
    if(num>3){
        return function(){
            console.log("Iam a good function")
            console.log("You won a million dollars!")
        }
    }
    else{
        return function(){
            console.log("Iam a computer virus!")
            alert("Do not try to close this window")
            alert("Do not try to close this window")
            alert("Do not try to close this window")
            alert("Do not try to close this window")
        }
    }
}

let mystery= mysteryFunction()
mystery()   

function makeBetweeen(min,max){
    return function(num){
        return (num>=min)&&(num<max)
    }
}

const isAdult= makeBetweeen(18,65)
console.log(isAdult(25))