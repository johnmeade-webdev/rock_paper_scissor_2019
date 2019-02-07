const userChoice = 'rock';

function computerPlay(){
    let randomPlay = Math.floor(Math.random() * Math.floor(3));
    
    switch(randomPlay) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissor'
            break;
    };
}

function playRound(userChoice){
    let compChoice = computerPlay();
    let userWon = false;
    
    if(userChoice == compChoice){
        return `You and the computer picked ${userChoice}. Tie Game!`;
    }

    if(userChoice == 'rock' && compChoice == 'scissor'){
        userWon = true;
    }else if(userChoice == 'paper' && compChoice == 'rock'){
        userWon = true;
    }else if(userChoice == 'scissor' && compChoice == 'paper'){
        userWon = true;
    };

    return userWon ? `Congrats, you won! ${userChoice} beats ${compChoice}.` : `Maybe next time. ${compChoice} beats ${userChoice}.`;
}

