let name={
    firstName: "Akshay",
    lastName: "Saini",
    
}
printFullName= function(homeTown="Indian Village",state="TamilNadu"){
    console.log(`${this.firstName} ${this.lastName} from ${homeTown} in ${state}`)
}
printFullName.call(name)

let name2={
    firstName:"Sachin",
    lastName:"Tendulkar"
}
//function borrowing
printFullName.call(name2,"Mumbai","Maharashtra")
printFullName.apply(name2, ["Delhi","UP"])//the arguments are passed as an array in the apply method

let printSachinName= printFullName.bind(name2,"Mumbai","Maharashtra")//similar to call
//what this does is that it binds the function to the object and can be used at anylaterpoint
console.log(printSachinName)//will return a function
printSachinName()