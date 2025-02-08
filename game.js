

let humanScore = 0
let computerScore = 0



/* function to get human choice */

function gethumanChoice()
{ 
;
    let humanchoice = prompt("Rock, Paper or Scissors?");
    if (humanchoice === 'rock' || humanchoice === 'paper' || humanchoice === 'scissors')
    return (humanchoice.toLowerCase());
    else 
    return gethumanChoice();

}   




/* function to randomly get the computers choice 
function getComputerChoice(min, max) 
    {
       const minCeiled =  Math.ceil(min);
       const maxFloored = Math.floor(max);
       
        Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) 

        if (getComputerChoice(min, max) == 0)
        {
           return "rock";
        }
        else if (getComputerChoice(min, max) > 0)
        {
           return "paper";
        }
        else 
        {
           return "scissors";

        } 
    }*/


const min = 0
const max = 1


    function getComputerChoice(min, max) 
    {
       const minCeiled =  Math.ceil(min);
       const maxFloored = Math.floor(max);

       let randomChoice = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) 

        if (randomChoice === 0)
        {
           return "rock";
        }
        else if (randomChoice === 1)
        {
           return "paper";
        }
        else 
        {
           return "scissors";
        } 
    }
/* function to play a round */

    function playRound(humanChoice, computerChoice)
    {   
        gethumanChoice();
        getComputerChoice();
        
        
        if (humanChoice === computerChoice)
           return console.log("TIE!");
        else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper')
           return console.log("CONGRATULATIONS YOU WIN");
        else 
           return console.log("YOU LOSE!");
        
    }


    playRound();
    

    
            
    


        



                

            

            
    
        

    
    
