const initGame=()=>{
    const startGame= confirm("Shall we play stone, paper, scissors?")

    startGame? playGame():alert("Ok maybe later")
}

//gameflow
const playGame=()=>{
    while(true){
        let playerChoice= getPlayerChoice()
        playerChoice= formatPlayerChoice(playerChoice)
        if(playerChoice===''){
            invalidChoice()
            continue
        }
        if(!playerChoice){
            decidedNotToPlay()
            break
        }
        playerChoice= evaluatePlayerChoice(playerChoice)
        if(!playerChoice){
            invalidChoice()
            continue
        }

        const computerChoice= getComputerChoice()

        const result= determineWinner(playerChoice,computerChoice)
        displayResult(result)
    }
}

const getPlayerChoice=()=>{
    return prompt("Please enter rock,paper or scissors: ")
}
function formatPlayerChoice(playerChoice){
    if(playerChoice||playerChoice==='')
    return playerChoice.trim().toLowerCase()
    else
    return false
}

const decidedNotToPlay=()=>{
    alert("I guess you changed your mind, maybe next time.")
}

function evaluatePlayerChoice(playerChoice){
    if(playerChoice==='rock'||playerChoice==='scissors'||playerChoice==='paper'){
        return playerChoice
    }
    else{
        return false
    }
}

function invalidChoice(){
    alert("You didnot enter rock paper or scissors")
}

const getComputerChoice=()=>{
    const randomNo= Math.floor(Math.random()*3)
    const rps=["rock","paper","scissors"]

    return rps[randomNo]
}

const determineWinner=(player, computer)=>{
    const winner= 
    player===computer?
    "TieGame!":
    player==='rock'&&computer==='paper'?
    `PlayerOne: ${player}, Computer: ${computer}\nComputer wins!!`:
    player==='scissors'&&computer==='rock'?`PlayerOne: ${player}, Computer: ${computer}\nComputer wins!!`:
    `PlayerOne: ${player}, Computer: ${computer}\nPlayer wins!!`

    return winner
}

const displayResult=(result)=>{
    alert(result)
}

const askToPlayAgain=()=>{
    return confirm("Play Again?")
}

const thanksForPlaying=()=>{
    alert("Ok, tanks for playing")
}

initGame();