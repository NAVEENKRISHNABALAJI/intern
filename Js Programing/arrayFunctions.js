const numbers=[1,2,3,4,5,6,7,8,10]

//forEach method
numbers.forEach(function(el){
    if(el%2==0)
    console.log(el)
})

//map method
const doubles= numbers.map(function(num){
    return num*2
})
console.log(doubles)

//arrow functions
const sum=(a,b)=>{
    return a+b
}
console.log(sum(20,53))
const rollDie= ()=>{
    return Math.floor(Math.random()*6)+1
}
console.log(`Die rolled ${rollDie()}`)
console.log(`Die rolled ${rollDie()}`)
console.log(`Die rolled ${rollDie()}`)

//Arrow functions with implicit return,
//give the function body in a parenthesis() instead of {}
//it works only when ther is single statement inside the function, 
//if there is more than one statement it throws error
const rollDies=()=>(
    Math.floor(Math.random()*6)+1
)
//console.log(rollDies())

const add=(a,b)=> a+b
//console.log(add(5,6))

triples= numbers.map(number=> number*3)
//console.log(triples)

// filter method
newArray=numbers.filter(n=> (
    n<10
))
//console.log(newArray)

//ever and some methods
const exams=[80,98,97,84,50,43,87]
console.log(exams.every(score=> score>50))
console.log(exams.every(score=>score>40))
console.log(exams.some(score=>score>80))
//spread function
console.log(exams)
console.log(...exams)
console.log("hello")
console.log(..."hello")
const cats=["blue","scout","rocket"]
const dogs=["bruno","rusty"]
const allPets=[...cats,...dogs]
console.log(allPets)
const newObject={...cats, ...dogs}
// in this case 0 was initially blue 1 was scout later when the spread include dogs
// which has only two items in oth and 1st index, 0 becomes bruno and 1 becomes rusty
console.log(newObject)

//rest parameter is used to get n number of parameters
//example
function addition(...nums){
    return nums.reduce((total,num)=> total+num)
}
const result= addition(1,2,3,4,5,6,76,8374,424,10000)
console.log(result)

function raceResults(first, second,...rest){
    console.log("Gold medal goes to "+first)
    console.log(`Silver medal goes to ${second}`)
    console.log(`And thanks to everyone ${rest}`)
}
raceResults('a','b','c','d','e')
