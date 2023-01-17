'usestrict'

let secretNumber = Math.floor(Math.random() * 20) + 1;
const btnCheck = document.querySelector('.check');
let message = document.querySelector('.message');
let hiddenNumber = document.querySelector('.secret-number');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score')
let userScore = 20;
let userHighScore = 0;






btnCheck.addEventListener('click', function () {
    let number = Number(document.querySelector('.number').value);
    //NO NUMBER
    if (!number) {
        message.innerHTML = 'please enter a number';
    }

    //NUMBER IS CORRECT
    else if (number === secretNumber) {
        message.innerHTML = 'corret';
        userScore++;
        score.innerHTML = userScore;
        if (userScore > userHighScore) {
            highScore.innerHTML = userScore

        }



    }

    //NUMBER IS TOO LOW
    else if (number < secretNumber) {

        
        message.innerHTML = 'number is too low';
        userScore--;
        score.innerHTML = userScore;
        
    }



    //NUMBER IS TOO HIGH
    else if (number > secretNumber) {
        message.innerHTML = 'number is too high';
        userScore--;
        score.innerHTML = userScore;



    }

    console.log(number, typeof number);

});



// 