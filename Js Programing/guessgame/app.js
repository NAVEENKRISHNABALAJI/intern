let maximum= parseInt(prompt("Enter the maxinmum number of attempts:"))
while(!maximum){
maximum=parseInt(prompt("Enter a valid number"))
}

const targetNum= Math.floor(Math.random()*maximum)+1
console.log(targetNum)
let attempts=0
let guess= prompt("Enter your first guess: ")
while(parseInt(guess) !== targetNum){
    if(guess==='q')
        break;
    else if(guess>targetNum)
    guess= (prompt("Too high"))
    else
    guess= (prompt("Too Low"))

    attempts++
}
if(guess==='q'){
    console.log("Ok quittin")
}
else{
    console.log("Congrats!")
    console.log(`You got it. It took you ${attempts} guesses`)
}
