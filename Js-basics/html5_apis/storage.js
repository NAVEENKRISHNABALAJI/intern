//setItem
//getItem
//clear
//removeItem(key)- delete one item
//key(index)-->gets the name of the items
localStorage.setItem('dude','Nkb')
let val= localStorage.getItem('dude')
console.log(val)

let key='pacmanHighscore'
localStorage.setItem(key,123123)

let options={"name":"Naveen",
"game":"bowling",
"score":[9,10,"strike"]}
let strObj= JSON.stringify(options)
localStorage.setItem("thePlayer",strObj)

let og= localStorage.getItem("thePlayer")
og= JSON.parse(og)
console.log(og)
console.log(og.score[1])

sessionStorage.setItem('dude','Naveen kb')