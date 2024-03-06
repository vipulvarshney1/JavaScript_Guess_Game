let randomNumber = parseInt(Math.random() * 100 + 1);


const userinput = document.querySelector("#userinput");
const submit = document.querySelector("#submit");
const previousGuess = document.querySelector("#previous_guess");
const guessremaining = document.querySelector("#Remaining_guess");
const loworhigh = document.querySelector("#loworhigh");
const startover = document.querySelector(".startover");

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;
let playGame = true ;


if (playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateGuess(guess);
    });
};


function validateGuess(guess){
    //only validate whether abc or int 
    if(isNaN(guess)){
        alert('please enter a valid number');
    }
    else if(guess < 1){
        alert('please enter more than one');
    }
    else if(guess > 100){
        alert('please enter less than or equal to 100');
    } 
    else{
        preGuess.push(guess);
        if( numGuess === 11){
            displayGuess(guess);
            displaymessage(`GameOver, Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}



function checkGuess(guess){
    //check equal or not to the random number
    if(guess === randomNumber){
        displaymessage('you guessed it right');
        endGame();
    }
    else if(guess > randomNumber){
        displaymessage('value is too high');
    }
    else if(guess < randomNumber){
        displaymessage('value is too low');
    }
}

function displayGuess(guess) {
    if (numGuess === 1) {
        previousGuess.innerHTML = `Previous guess: ${guess}`;
    } else {
        previousGuess.innerHTML += `, ${guess}`;
    }
    userinput.value = '';
    numGuess++;
    guessremaining.innerHTML = `Remaining Guess: ${11 - numGuess}`;
}




function displaymessage(message){
    //print in DOM
     loworhigh.innerHTML =`<h2>${message}</h2>`;
}

function endGame(){
    userinput.value = '';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = '<h3 id = "newGame">Start new Game</h3>';
    startover.appendChild(p);
    playGame = false;
    newGame();
}


function newGame(){
    const newGamebtn = document.querySelector('#newGame');
    newGamebtn.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        preGuess =[];
        numGuess = 1;
        previousGuess.innerHTML = '';
        guessremaining.innerHTML = `${11 - numGuess}`;
        userinput.removeAttribute('disabled');
startover.removeChild(p);
playGame =true;
    });
}