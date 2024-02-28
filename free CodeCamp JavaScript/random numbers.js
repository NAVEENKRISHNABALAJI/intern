//generating random numbers
//using: Math.random()
//whole numbers: Math.floor(Math.random()*n)//a whole number less than n is generated
//generating random numbers within the range
function randomRange(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}

console.log(randomRange(3,6))
