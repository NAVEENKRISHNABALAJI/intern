function Person(first, last, age, eyeColor){
    this.first= first
    this.last= last
    this.age= age
    this.eyeColor= eyeColor
}

let mike= new Person("Mike","Abderson",54,"blue")
let hanna= new Person("Hanna","Mcafe",27,"black")
//object prototype is used to add methods and properties to the object constructor
Person.prototype.nationality="Ind"
Person.prototype.name= function() {
    return `${this.first} ${this.last}`    
}
console.log(`Mike's full name is ${mike.name()}, nationality is ${mike.nationality}`)
