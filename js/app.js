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



//Makes Overlay Disapear 
btnReset.addEventListener( 'click', () => {
    overlay.style.display = 'none';
});


//Generate Random Phrase
const getRandomPhrase = (arr) => {
    const randomNumber = Math.floor(Math.random() * phrases.length);
    return phrases[randomNumber];
};


//Calls Random Phrase
const randomPhrase = getRandomPhrase(phrases);


//Add Phrase to Display
const addPhraseToDisplay = (arr) => {
    //
    for(let i = 0; i<arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li)
        
    }
};

addPhraseToDisplay(randomPhrase);