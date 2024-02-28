//SETS are ordered based on insertion, every new element of a set are inserted at the last
//declaring sets
const annoyingHashTags= new Set(['#selfie','#nofilter'])

console.log(annoyingHashTags);

annoyingHashTags.add("#YOLO")

annoyingHashTags.add(12)
annoyingHashTags.add(true)

console.log(annoyingHashTags);

annoyingHashTags.add(12)//not added
annoyingHashTags.add("#YOLO")//not added

console.log(annoyingHashTags)

annoyingHashTags.add([1,2,3])//the entire array is added as an item to the set
console.log(annoyingHashTags)

console.log(`The size of the set is ${annoyingHashTags.size}`)
console.log(annoyingHashTags.has("#YOLO"))
console.log(annoyingHashTags.has("#animakmo"))
annoyingHashTags.delete(true)// deletes a particular item from the set
console.log(annoyingHashTags)
//to delete all the items from the set clear() metod is used
// annoyingHashTags.clear()
// console.log(annoyingHashTags)


//sets are iterable
for(let val of annoyingHashTags){
    console.log(`Please don't use ${val} hashtags`)
}
//sets are used to relace arrays in very specific situations like working with unique values and so on


console.log(annoyingHashTags.values())
console.log(annoyingHashTags.keys())


const letters = new Set(["a","b","c"]);
let text = "";
letters.forEach (function(value) {
  text += value;
})
console.log(text)
const myIterator = letters.entries();
// List all Entries
text = "";
for (const entry of myIterator) {
  text += entry;
}
console.log(text)

console.log(typeof(letters))
console.log(typeof(annoyingHashTags))
console.log(letters instanceof Set)
console.log(annoyingHashTags instanceof Set)