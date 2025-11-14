// DOM elements
const board = document.getElementById('board');
const movesEl = document.getElementById('moves');
const pairsEl = document.getElementById('pairs');
const timeEl = document.getElementById('timeLeft');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const bestScoreEl = document.getElementById('bestScore');
const overlay = document.getElementById('countdownOverlay');

// Game configuration
const rows = 3; // grid layout chosen via CSS; use 6x3 = 18 cards (9 pairs)
const cols = 6;
const totalPairs = 9;
const initialTime = 60; // seconds

// State
let firstCard = null;
let secondCard = null;
let busy = false;
let moves = 0;
let matchedPairs = 0;
let timeLeft = initialTime;
let timerId = null;
let pendingTimeouts = [];
let bestScore = null;


// step-1  
// call -> entire previous data -> store -> bestscore variablee........
function onLoad(){
    var temp = localStorage.getItem('previousData');
    if(temp != null){
        bestScore = parseInt(temp);
    }
    else{
        bestScore = 0;
    }
}
// Actual content reflect -> html file me....
function displayContent(){
    timeEl.textContent = timeLeft;
    bestScoreEl.textContent = bestScore;
}

onLoad();
displayContent();

var arr1 = [1,2,3,4,5,6,7,8,9];

function createCard(value){
    const card = document.createElement('div');
    card.classList.add('card');

    const inner = document.createElement('div');
    inner.classList.add('inner');
    
    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');
    back.textContent = value;

    inner.appendChild(front);
    inner.appendChild(back);

    card.appendChild(inner);

    return card;

}

function cardMaking(){

    // destructure method
    var arr3 = [...arr1, ...arr1];
    console.log(arr3);

    // suffeling -> position exchange
    for(let i = arr3.length-1; i>0; i--){
        var j = Math.floor(Math.random()*(i+1));
        var a = arr3[i];
        arr3[i] = arr3[j];
        arr3[j] = a;
    }
    console.log(arr3);
    
    arr3.forEach((value)=>{
        
        const card = createCard(value);
        console.log(i);
        console.log(card);
    })

}
cardMaking();