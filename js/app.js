const qwerty = document.querySelector('qwerty');
const phrase = document.querySelector('phrase');
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const ul = document.getElementById('list');
const missed = 0;

const phrases = [
    'Front End',
    'Back End',
    'Treehouse Techdegree',
    'Web Development',
    'JavaScript'
];



// Makes overlay disapear 
btnReset.addEventListener( 'click', () => {
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
const addPhraseToDisplay = (arr) => {
    // Loop to create li for each letter in phase
    for(let i = 0; i<arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li)
        // Sets classname for phrase charcters
        if(arr[i] === " "){
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
    }
}


// Calls phrase to display
addPhraseToDisplay(randomPhrase);


// Checks if letter is in phrase
const checkLetter = (button) => {
    
}