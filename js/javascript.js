function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

let playerSelection = '';
let computerSelection = '';
let outcome;
let round = 0;

/* 
0 - stands for draw
1 - stands for win
2 - stands for lose
*/

function playRound(playerSelection, computerSelection) {
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



const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const computerChoice = document.querySelector('#computer-choice');

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const btn = document.querySelector('#play-again');

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    outcome = playRound(playerSelection,computerSelection);
    computerChoice.maxWidth = '100%';
    switch(computerSelection)
    {
        case 'rock':
            computerChoice.src = 'img/rock.png';
            break;
        case 'paper':
            computerChoice.src = 'img/paper.png';
            break;
        case 'scissors':
            computerChoice.src = 'img/scissors.png';
            break;
    }
    if(outcome === 1)
    {
        let score = +playerScore.textContent;
        score++;
        playerScore.textContent = score;
    } else if (outcome === 2) 
    {
        let score = +computerScore.textContent;
        score++;
        computerScore.textContent = score;
    } else{
        let scorePlayer = +playerScore.textContent;
        let scoreComputer = +computerScore.textContent;
        scorePlayer++;
        scoreComputer++;
        computerScore.textContent = scoreComputer;
        playerScore.textContent = scorePlayer;
    }

    round++;
    if(checkEndGame())
        btn.style.display = 'block';
    else btn.style.display = 'none';;
})

paper.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    outcome = playRound(playerSelection,computerSelection);
    computerChoice.maxWidth = '100%';
    switch(computerSelection)
    {
        case 'rock':
            computerChoice.src = 'img/rock.png';
            break;
        case 'paper':
            computerChoice.src = 'img/paper.png';
            break;
        case 'scissors':
            computerChoice.src = 'img/scissors.png';
            break;
    }
    if(outcome === 1)
    {
        let score = +playerScore.textContent;
        score++;
        playerScore.textContent = score;
    } else if (outcome === 2) 
    {
        let score = +computerScore.textContent;
        score++;
        computerScore.textContent = score;
    } else{
        let scorePlayer = +playerScore.textContent;
        let scoreComputer = +computerScore.textContent;
        scorePlayer++;
        scoreComputer++;
        computerScore.textContent = scoreComputer;
        playerScore.textContent = scorePlayer;
    }

    round++;
    if(checkEndGame())
        btn.style.display = 'block';
    else btn.style.display = 'none';;
})

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    outcome = playRound(playerSelection,computerSelection);
    computerChoice.maxWidth = '100%';
    switch(computerSelection)
    {
        case 'rock':
            computerChoice.src = 'img/rock.png';
            break;
        case 'paper':
            computerChoice.src = 'img/paper.png';
            break;
        case 'scissors':
            computerChoice.src = 'img/scissors.png';
            break;
    }
    if(outcome === 1)
    {
        let score = +playerScore.textContent;
        score++;
        playerScore.textContent = score;
    } else if (outcome === 2) 
    {
        let score = +computerScore.textContent;
        score++;
        computerScore.textContent = score;
    } else{
        let scorePlayer = +playerScore.textContent;
        let scoreComputer = +computerScore.textContent;
        scorePlayer++;
        scoreComputer++;
        computerScore.textContent = scoreComputer;
        playerScore.textContent = scorePlayer;
    }

    round++;
    if(checkEndGame())
        btn.style.display = 'block';
    else btn.style.display = 'none';;
});


function checkEndGame(){
    if(round > 5)
        {
            return true;
        }
        else return false;
}

function resetGame(){
    computerScore.textContent = '0';
    playerScore.textContent = '0';
    btn.style.display = 'none';
    round = 0;
    computerChoice.src = 'img/question-mark.png';
    computerChoice.maxWidth = '70%';

}
btn.addEventListener('click', ()=>{
    resetGame();
});