const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resumeBtn = document.querySelector('#resumeBtn');
const resetBtn = document.querySelector('#resetBtn');
const holes = document.querySelectorAll('.hole');
// console.log(holes);
const moles = document.querySelectorAll('.mole');
const scorebox = document.querySelector('.colorch');
const msg = document.querySelector('.realmsg');
const hitDisplay = document.querySelector('.hits');
const fastClick = document.querySelector('#fastClick');


//  required variable
var score = 0;
var time = 30;
var bestScore = 0;
var playGame = false;
var gameId = null;
var hits = 0;
var startTime = Infinity;
var endTimes = 0;
var fast = 0;
var max =0;


// call when every game start 

function webLoad(){
    onLoad();
    displayContent();
}

//  step - 2 
// 1. load the entire date


function onLoad(){
    var temp = localStorage.getItem('highScoreGame');
    if(temp != null){
        bestScore = temp;
    }
    else{
        bestScore = 0;
    }
    sessionStorage.getItem('lastScore');

};


//  step - 2 
// 2. after loading the entire date 
//  reflecting the actule value in the required html element using textcontent

function displayContent(){
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = time;
    maxScoreDisplay.textContent = bestScore;
}

// calling webLoad function
webLoad();
// rendom time generate
function randomTimeGenerator(min , max){
    return Math.floor(Math.random()*(max-min)+max);
}

// rendom index which will return the distance element
function randomIndex(){
    var  index =   Math.floor(Math.random()*holes.length);
    return holes[index];
};

// pop game implitation for image appear and disapper purpous
function popImageGame(){
    if(time<=10){                                                  //  task 4  Mole Speed Increases (Time Left < 10)
        var rendomTime = randomTimeGenerator(300, 500);
    }
    else{
        var rendomTime = randomTimeGenerator(500, 1000);
    }
    var hole = randomIndex();

    var mole = hole.querySelector('.mole');

    if( playGame){
        mole.classList.add('up');
        // if (startTime == null) {
        startTime = Date.now();
        

        setTimeout(function(){

        mole.classList.remove('up');

        popImageGame();

        },rendomTime);
    }
}

// endgmae imlattion

    function endGame(){
        playGame = false;
        gameId = null;
        resetBtn.disabled = false;
        pauseBtn.disabled = true;
        startBtn.textContent = "Play Again"; // task 3  Start Button Says "Play Again"

        sessionStorage.setItem('lastScore', score);      // task 7

        clearInterval(gameId);
        if(score > bestScore){
            
            

            bestScore = score;
            localStorage.setItem('highScoreGame', bestScore);
            alert(`you score is higher then the previous one: ${score}`);
        }
        else{
                alert(`youe score is: ${score}`);
        }
         scorebox.textContent = "Last Game Score"    // task 7
   
        // score = 0;
        displayContent();
        startBtn.disabled = false;
    }


// actual implitation of start Game
function startGame(){

    score = 0;
    time = 30;
    scorebox.textContent = "Score"
    startBtn.disabled = true;
    resetBtn.disabled = true;
    pauseBtn.disabled = false;

    playGame = true;
    //  disable the start btn when game starts

    // fastClick.textContent = "---"


    popImageGame();

    gameId = setInterval(function(){
        time--;

        if(time === 0){
            clearInterval(gameId);

            endGame();
        }
        displayContent();
    },1000)
}

function bonk(event){
    if(playGame == false) return;

    hits++;
    hitDisplay.textContent = `Hits :-${hits}`;       // task 5  Hit Counter (Separate from Score)

    fast = Date.now() - startTime;
    console.log(fast);
    
        if(fast<max){
        max = fast;
        console.log(max);
        fastClick.textContent = `${max}ms`
     }
    
    

    if(event.target.classList.contains('up')){
        score++;
        msg.innerHTML = "Whack!";                    // task 2 
        setTimeout(function(){
            msg.innerHTML = "";
        },300);

        if(score>25){                                       // task 1   Score Turns Gold When > 50
             scorebox.style.color = "gold" ;
        }

        event.target.classList.remove('up');
        event.target.classList.add('bonked');
    }
    setTimeout(function(){
        event.target.classList.remove('bonked');
    });


        if(score > bestScore){
            
            maxScoreDisplay.style.color ="gold"  // task 6     "New Record!" Glow on Best Score

            setTimeout(function(){
                maxScoreDisplay.style.color ="white"  
            },1500);

        }
        


    displayContent();
}
function resetGame(){
    bestScore = 0;
    score = 0;
    hits = 0;
    time = 30;
    hitDisplay.textContent = `Hits :-${hits}`; 
    displayContent();
}
function pauseGame(){
    playGame = false;
    pauseBtn.style.display = "none";
    resumeBtn.style.display= "block" ;
    clearInterval(gameId);
}
function resumeGame(){
    playGame = true;
    pauseBtn.style.display = "block";
    resumeBtn.style.display= "none" ;
    popImageGame();

    gameId = setInterval (function() {
        time--;
        displayContent();
        
        if(time<=0){
            clearInterval(gameId);
            endGame();
        }
    },1000 );
}

// Add eventlistner part
startBtn.addEventListener('click',startGame);

moles.forEach((box) => {
    box.addEventListener('click', bonk);
})

resetBtn.addEventListener('click',resetGame);
pauseBtn.addEventListener('click',pauseGame);
resumeBtn.addEventListener('click',resumeGame);

