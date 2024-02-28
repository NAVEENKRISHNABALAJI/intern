//creation of object
var ourDog={
    'name': 'camper',
    'legs': 4,
    'tails': 1,
    'friends': ["everything"]

}

//using dot notation to access object elements
var testObject={
    "hat": "ballcap",
    "shirt": "jersy",
    "shoes": "cleats",
    "an antree": "hamburger"
};

var testHat= testObject.hat
var testShirt= testObject.shirt
var testShoes= testObject.shoes
console.log(`${testHat} hat with ${testShirt} shirt and ${testShoes} shoes`)
//if the key of the oject has space in between then the dot notation cannot be used
//in such cas use["key"] notation to acess the values to the corresponding keys
var food= testObject["an antree"]
console.log(`the food is : ${food}`)
//object properties can be updated with the bot the notations mentioned above
testObject.hat= "cowboyHat"
console.log(testObject)
testObject['shoes']="AirJordans"
console.log(testObject)

//object properties can be deleted using the delete keyword
delete testObject["an antree"]
console.log(testObject)
delete testObject.shirt
console.log(testObject)

//objects can be used for lookup instead of switch cases
let myObj={
    gift:"pony",
    pet:"kitten",
    bed:"sleigh"

}

function checkObj(props){
    if(myObj.hasOwnProperty(props)){
        return myObj[props]
    }
    else{
        return "notFound"
    }
}

console.log(checkObj("gift"))
console.log(checkObj("car"))

//nested Objects
let myStorage={
    'car':{
        'inside':{
            'gloveBox':"Maps",
            'passengerSeat':"Crumbs"
        },
        'outside':{
            'trunk':"Luggages and jack"
        }
    }
}

let gloveBoxContents= myStorage.car.inside.gloveBox
console.log(gloveBoxContents)


function Person(name, age, sex){
    this.name= name
    this.age= age
    this.sex= sex
}
const Ken= new Person("Ken",33,'M')
const Miles= new Person("Miles",35,'M')
console.log(Ken)
function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
  }
  const myCar = new Car("Eagle", "Talon TSi", 1993, Ken);
  console.log(myCar)  

  //for in statement loops through the properties of the object
  for(let prop in testObject){
    console.log(`${testObject[prop]}\n`)
  }