const person={
    firstName: "Mick",
    lastName: "Jagger"
}
console.log(person)
//no specific order
//only key value pairs matters

const kitchenSink={
    favNum:234134,
    isFunny:true,
    colors:['red','orange']

}
console.log(kitchenSink)
//accessing data out of objects:
console.log(kitchenSink['colors'])
console.log(person["firstName"])
console.log(person["lastName"])
//another method:
console.log(kitchenSink.colors)
console.log(person.firstName)
console.log(person.lastName)