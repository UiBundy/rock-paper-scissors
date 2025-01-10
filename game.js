/* function to randomly get the computers choice */

const min = 0
const max = 3



function HumanChoice() 
    {
        let choice = prompt("rock, paper or scissors?");
        if (choice == Number)
            console.log("rock, paper or scissors?");
      
    }
    



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

    
    
        

    
    
