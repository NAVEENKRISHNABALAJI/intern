let playGame= confirm("Shall we play rock - paper - scissors?")
if(playGame){
    let playerChoice= prompt("Please enter your choice")
    if(playerChoice){
        let playerOne= playerChoice.trim().toLowerCase()
        if(playerOne==="rock"||playerOne==="paper"||playerOne==="scissors")
        {
            let computer= Math.floor(Math.random()*3)+1
            let computerChoice= computer===1?"rock":computer===2?"paper":"scissores"
        
            let result= playerOne===computerChoice?"Tie Game"
            :playerOne==="rock"&&computerChoice==="paper"
            ?`playerOne:${playerOne} Computer:${computerChoice}\nComputer wins!`
            :playerOne==="paper"&&computerChoice==="scissors"
            ?`playerOne:${playerOne} Computer:${computerChoice}\nComputer wins!`
            :playerOne==="scissors"&&computerChoice==="rock"
            ?`playerOne:${playerOne} Computer:${computerChoice}\nComputer wins!`
            :`playerOne:${playerOne} Computer:${computerChoice}\nPlayer wins!`

            alert(result)
            let playAgain= confirm("Play Again?")
            playAgain?location.reload():alert("Ok thanks for playing")
        }else{
            alert("you didnt enter rcp")
        }
    }else{
        alert("I guess you changed your mind maybe later")
    }
}else{
    alert("May be next time.")
}