

/* function to randomly get the computers choice */
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
/* function to get human choice */

    function gethumanChoice()
           { 
            humanchoice = prompt("Rock, Paper or Scissors?");
            if (humanchoice === 'rock' || humanchoice === 'paper' || humanchoice === 'scissors')
                return console.log(humanchoice.toLowercase)
            else 
                return console.log("Please choose Rock, Paper or Scissors")
            
           }   
            
    


        



                

            

            
    
        

    
    
