let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p')


let prevGuess = []

let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alart('Please enter a Valid Number')
    }
    else if (guess < 1) {
        alart('Please enter a Number more then 1')
    }
    else if (guess > 100) {
        alart('Please enter a Number less then 100')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over.Random number was ${random}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess===random){
        displayMessage(`You Guessed it right`)
        endGame()
    }
    else if(guess<random){
        displayMessage(`Number is Too Low`)
    }
    else if(guess>random){
        displayMessage(`Number is Too High`)
    }
}

function displayGuess(guess) {
    userInput.value ='';
    guessSlot.innerHTML+=`${guess},  `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame() {
    userInput=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">start New Game</h2>`;
    startOver.appendChild(p)
    playGame=false;
    newGame();
}

function newGame() {
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e){
    random = parseInt(Math.random() * 100 + 1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame=true;
   })
}

