
/* function to get human choice */

function gethumanChoice()
{ 
    let humanchoice = prompt("Rock, Paper or Scissors?");
    if (humanchoice === 'rock' || humanchoice === 'paper' || humanchoice === 'scissors')
        {console.log(humanchoice.toLowerCase());}
    else 
        {prompt("Please choose Rock, Paper or Scissors");}

}   




/* function to randomly get the computers choice */
let humanScore = 0
let computerScore = 0


const min = 0
const max = 3


    function getComputerChoice(min, max) 
    {
       const minCeiled =  Math.ceil(min);
       const maxFloored = Math.floor(max);
       
       return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) 
       
    }

        if (getComputerChoice(min, max) == 0)
        {
            console.log("rock");
        }
        else if (getComputerChoice(min, max) > 0)
        {
            console.log("paper");
        }
        else 
        {
            console.log("scissors");

        } 


    function playRound(humanChoice, computerChoice)
    {   
        let gethumanChoice = humanChoice;
        let getComputerChoice = computerChoice;

        if (humanChoice === computerChoice)
            {console.log("TIE!");}
        else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper')
            {console.log("CONGRATULATIONS YOU WIN");}
        else 
            {console.log("YOU LOSE!");}
        
    }

    playRound(humanChoice, computerChoice)

    
            
    


        



                

            

            
    
        

    
    
