const qwerty = document.getElementById('qwerty');
const phrase = document.querySelector('phrase');
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.getElementById('list');
const heartImage = document.getElementsByTagName('img');
let missed = 0;

const phrases = [
    'Front End',
    'Back End',
    'Techdegree',
    'Web Development',
    'JavaScript'
];



// Makes overlay disapear 
btnReset.addEventListener( 'click', e => {
    overlay.style.display = 'none';
})

// Generate random phrase
const getRandomPhrase = (arr) => {
    const randomNumber = Math.floor(Math.random() * phrases.length);
    return phrases[randomNumber];
}


// Calls random phrase
const randomPhrase = getRandomPhrase(phrases);


// Add phrase to display
const addPhraseToDisplay = arr => {
    // Loop to create li for each letter in phase
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li)
        // Sets classname for phrase charcters
        if (arr[i] === " "){
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
    }
}


// Calls phrase to display
addPhraseToDisplay(randomPhrase);


// Checks if letter is in phrase
const checkLetter = button => {
    const letter = document.querySelectorAll('li');
    let match = null;
    for (let i = 0; i < letter.length; i++){
        if (letter[i].textContent.toLowerCase() === button.textContent.toLowerCase()) {
            letter[i].className = 'show';
            match += letter[i].textContent
        }
    }
    return match;
}

//Listens for clicks on letter buttons
qwerty.addEventListener('click', e => {
    //Disables used letters
    let button = e.target;
    if(button.tagName === 'BUTTON'){ 
        button.className = 'chosen';
    }
    //Removes a heart image and replaces with new img
    if (e.target.className === 'chosen') {
        button.disabled = true;
        let letterFound = checkLetter(button);
        if (letterFound === null) {
            heartImage[missed].src = 'images/lostheart.png';
            missed += 1
        }
        checkWin();
    }
})

//Checks for win or loss
function checkWin (){
    const letters = document.getElementsByClassName('letter');
    const correctLetters = document.getElementsByClassName('show');
    let h2 = document.querySelector('.title');
    if (letters.length === correctLetters.length){
        overlay.className = 'win reset';
        h2.textContent = 'You Won!';
        overlay.style.display =  'flex';
        btnReset.textContent = 'Play Again'
    } else if (missed> 4){
        overlay.classname='lose reset';
        h2.textContent = 'You Lose!'
        overlay.style.display = 'flex';
        btnReset.textContent = 'Try Again'
    }
}

//Reset Game
btnReset.addEventListener( 'click', e => {
    const li = document.querySelectorAll('li')
    for ( let i = 0; i < heartImage.length; i++){
        heartImage[i].src='images/liveheart.png'
    }
    li.classList.remove('chosen');
    li.classList.remove('show');
})
