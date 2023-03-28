function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

/* 
0 - stands for draw
1 - stands for win
2 - stands for lose
*/

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    return 0;
                case 'paper':
                    return 2
                case 'scissors':
                    return 1;
            }
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    return 1;
                case 'paper':
                    return 0;
                case 'scissors':
                    return 2;
            }
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    return 2;
                case 'paper':
                    return 1;
                case 'scissors':
                    return 0;
            }
        default:
            return 'Please enter a valid value!';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; ++i) {
        //let playerSelection = prompt('Input your choice');
        let outcome = playRound(playerSelection, getComputerChoice())
        switch (outcome) {
            case 0:
                break;
            case 1:
                ++playerScore;
                break;
            case 2:
                ++computerScore;
                break;
            default:
                alert('Something wrong happened!');
        }
    }

    if (playerScore > computerScore) {
        console.log('You win!');
    }
    else if (playerScore < computerScore) {
        console.log('You lose!');
    } else {
        console.log('Draw');
    }
}

game();