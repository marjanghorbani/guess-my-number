'use strict';
let secretNumber = Math.trunc(Math.random() * 20)+1;
let score = 20;
let highscore = 0;
let previousGuesses = [];
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener
('click', function() {
    const guess =Number( document.querySelector('.guess').value);
    if (!guess){
        displayMessage("⛔ it's empty!");
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#387027';
        document.querySelector('.number').style.width = '30rem';
        

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }    
    }
    else if(guess !== secretNumber) {
            if(score > 1){
                displayMessage(guess > secretNumber ? "⛔ it's too high!" : "⛔ it's too low!");
                previousGuesses.push(guess);
                document.querySelector('.previous-guesses').textContent = previousGuesses.join(', ');
                score--;
                document.querySelector('.score').textContent = score;
            }else {
                displayMessage("⛔ You Lost the Game!");
                document.querySelector('.score').textContent = 0;
            }    
    }    
});

document.querySelector('.again').addEventListener('click', function(){
    score=20;
    secretNumber = Math.trunc(Math.random() * 20)+1;
    document.querySelector('.guess').value='';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    previousGuesses = [];
    document.querySelector('.previous-guesses').textContent = '';
});
    

    
