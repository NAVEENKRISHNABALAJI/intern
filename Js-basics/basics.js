console.log("String with its methods and properties")
const str= "Mathematics"
console.log(str)
// leghth
console.log(`The length of str is: ${str.length}`)
//stringmethods
console.log(str.charAt(5));//0th index positioning

//indexof
console.log(str.indexOf("at"));//gives the first occurance of the substring passed
console.log(str.indexOf('mat'));
console.log(str.lastIndexOf("at"));//gives the last index of the sub str

//slice
console.log("Slice method: ")
console.log(str.slice(5,8))
console.log(str.slice(5))
console.log(str.slice(5,3));

//uppercase
console.log(str.toUpperCase())
//lowercase
console.log(str.toLocaleLowerCase())

//includes return boolean value 
console.log(str.includes("Hello"))
console.log(str.includes("Math"))

//split
console.log(str.split('e'))
console.log(str.split(''))
console.log("My task to learn".split(" "));

console.log("\nNumbers and methods:")
const myNumber= 54
const myFloat= 42.3
console.log(typeof(myNumber)===typeof(myFloat))// will return true beacuse both are of type numbers
console.log(Number.isInteger(myNumber))
//parsefloat
console.log(parseFloat("437.984fsjf"));
console.log(parseInt("984hgkdv3"))
//chaining methods
console.log(parseFloat("532.4837jfkn").toFixed(3).toString())
console.log(Math.PI);
console.log(Math.round(Math.PI))
console.log(Math.ceil(4.123));
console.log(Math.floor(4.9999))
console.log(Math.pow(4,3))//4 to power of 3
//coding challenge
const name= "NaveenKrishnaBalaji"
let i= Math.floor(Math.random()*(name.length-1))+1
console.log(name[i])

//ternary operator
//condition? exprTrue: exprFalse
let player= "paper"
let computer= "scissors"

let result=(player===computer)? console.log("Tie")
:(computer==="scissors")?console.log("Player Wins")
:(computer==="paper")?console.log("Computer Wins!")
:console.log("Not a tie")

console.log(result)

//Arrays
const myArray=[]
console.log(myArray)
//adding element
myArray.push(10)
myArray[1]="Money"
myArray.push(true)
console.log(myArray)
console.log("size of array:"+ myArray.length)
console.log(myArray[myArray.length-1])
myArray.pop()
console.log(myArray)
myArray.unshift("Money")
myArray.unshift(1)
console.log(myArray);
myArray.shift()
console.log(myArray)
myArray.push(13)
console.log(myArray)
//delete myArray[1]//creates an empty element or space in between the array
//so use the splice metod
myArray.splice(1,1)
console.log(myArray)
console.log(myArray.reverse())
let newStr= myArray.join()
console.log(newStr)
const newArray= newStr.split(',')
console.log(newArray);
myNewArray= myArray.concat(newArray)
console.log(myNewArray)

//objects
const myObj={
    subs:true,
    no:10000,
    content:{
        earn:'Js',
        grow:'stocks'
    },
    subDivision:['earn','grow','give'],
    action: function(){
        return `Earn by learning ${this.content.earn}`
    }
}
console.log(myObj.content);
console.log(myObj.action());

const vehicle={
    doors:2,
    engine:function(){
        return "vroomm"
    }
}
console.log(vehicle.engine())
const car= Object.create(vehicle)
car.wheels=4
car.engine=function(){
    return 'whoosh'
}
console.log(car)
console.log(car.engine());
console.log(car.doors);
//tesla inherits from car which inhertis from vehicle
const tesla= Object.create(car)
console.log(tesla.doors);

const movie={
    actor:"kavin",
    music:"arr",
    director:"lokesh",
    prod:"rkfi"
}
console.log(Object.keys(movie));
console.log(Object.values(movie));
//accessing object elements usinng for loop
delete movie.prod
for(let i in movie){
    console.log(`${i} ${movie[i]}`)
}
console.log(movie.hasOwnProperty('prod'))
movie.prod="rkfi"
//destructuring
const {actor, music,director,prod}= movie
console.log(actor,director,music,prod)

function greeting(name){
    console.log(`Hello ${name}`)
}



