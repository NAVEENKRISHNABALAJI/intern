let selectedColors=['blue','red']
console.log(selectedColors[0], selectedColors[1])



//conating two or more arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const children = myGirls.concat(myBoys);
console.log(children)

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren)

//pop and push methods
//pop removes an element from the end of the array whereas push adds an element to the end of the array
myBoys.pop()
console.log(myBoys);
myBoys.push("Sanju")
console.log(myBoys)

//shift and unshift methods
// shift method removes an element from the starting of an array
// unshift method adds an element to the starting of the array
console.log(`childern: ${myChildren}`)
myChildren.shift()
console.log(`childern: ${myChildren}`)
myChildren.unshift("Sanju")
console.log(`childern: ${myChildren}`)

//array methods
//.filter()
const numbers=[1,-1,2,3]
const filtered = numbers.filter((n)=> n >= 0)
console.log(filtered)
//.map
const items= filtered.map(n => ({value:n}))
console.log(items)

//splice
let numArr = [20, 30, 40, 50]; 
//deleting 3 elements starting from index1
numArr.splice(1,3)
console.log(numArr)
//insert 80,90,100 at index1
numArr.splice(1,0,80,90,100)//first parameter represents the start index, 
//second parameter represents the number of elements to remove, the other parameters 
//represent the elements to be inserted at the index mentioned by the 1st parameter
console.log(numArr)

//.reduce method
const sum= numbers.reduce((accumulator, currentValue)=> accumulator+currentValue)
console.log("The sum of numers using reduce method= "+ sum)