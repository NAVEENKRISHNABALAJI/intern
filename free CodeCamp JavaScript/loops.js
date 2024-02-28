//while loop
let myArray=[]
let i=0
while(i<5){
    myArray.push(i)
    i++
}
console.log(myArray)

//for loop
// var ourArray=[]
// for(let i=0;i<5;i++){
//     ourArray.push(i+1)
// }
// console.log(ourArray)

//iterating through array contents
let ourArray=[9,10,11,12]
let ourSum=0
for(i=0;i<ourArray.length;i++)
{
    ourSum+= ourArray[i]
}
console.log(ourSum)
