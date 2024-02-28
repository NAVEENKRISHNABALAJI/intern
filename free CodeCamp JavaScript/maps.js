const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
//   console.log(fruits)
//set method can be used for both addin new key value pair as well as modofying the existing pair
fruits.set('grapes',400)
console.log(fruits)
fruits.set('apples',600)
console.log(fruits)

console.log(fruits.get('bananas'))
console.log(`The number of elements in the map are: ${fruits.size}`)
// delete method is used to delete a element from the map

fruits.delete("oranges")
console.log(fruits.has("oranges"))//false as we have deleted the oranges from the map

let text=''

fruits.forEach((value,key)=> text+= key+" = "+value+" ")
console.log(text)

text=""
for(const x of fruits.entries()){
    text+= x+" "
}
console.log(text)