'use strict';
const UserGuess = document.querySelector('.guess')
const message = document.querySelector('.message');
const currentScore = document.querySelector('.score');
const hiddenNumber = document.querySelector('.number');
const body = document.querySelector('body');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let HighScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number (UserGuess.value);
    if(!guess){
        console.log("inside");
        message.innerHTML = "Please Select a Number!";
        message.style.color = 'red';
    }else if(guess === randomNumber){
        message.innerHTML = "You Won!"
        message.style.color = "Black";
        hiddenNumber.innerHTML = randomNumber;
        body.style.backgroundColor = 'green';
        if(score > HighScore){
            HighScore = score;
            document.querySelector('.highscore').innerHTML = HighScore;
        }
    }else if(guess !== randomNumber){
        if(score > 1){
            message.innerHTML = guess > randomNumber? "Too High": "Too Low";
            score--;
        }else{
            console.log("inside score");
            message.innerHTML = "You Lose the Game!";
            message.style.color = 'red';
            hiddenNumber.innerHTML = randomNumber;
            hiddenNumber.style.backgroundColor = 'red';
            hiddenNumber.style.color = 'white';
        }
    } 

    currentScore.innerHTML = score;
})

document.querySelector('.again').addEventListener('click', function(){
    randomNumber = Math.trunc(Math.random() * 20);
    UserGuess.value = null;
    message.innerHTML = "Start guessing...";
    message.style.color = 'white';
    currentScore.innerHTML = 20;
    score = 20;
    body.style.backgroundColor = '#222';
    hiddenNumber.innerHTML = '?';
})
