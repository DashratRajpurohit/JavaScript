var currentScore = document.querySelector("#currentScore");
var highScore = document.querySelector("#highScore");
var timer = document.querySelector("#timer");
var clickButton = document.querySelector("#clickButton");
var startButton = document.querySelector("#startButton");
var statusMessage = document.querySelector("#statusMessage");
var resetButton = document.querySelector("#resetButton");
var pauseButton = document.querySelector("#pauseButton");
var resumeButton = document.querySelector("#resumeButton");
var vido = document.querySelector(".vido");
var userName = prompt("Eeter Your name :");
var current = 0;
var high = 0;
var timerleft = 10;
var timeid = null;
var flag = false;

function onWebsite() {
  loadData();
  displayContext();
}

function loadData() {
  var temp = localStorage.getItem("highScore");
  if (temp !== null) {
    high = temp;
  } else {
    high = 0;
  }
}

function temp() {
  localStorage.setItem("highScore", current);
  highScore = current;
}

function displayContext() {
  if (current > 20) {
    currentScore.style.color = "red"; //  task 1 =   Click Counter Turns Red When > 20
  }
  currentScore.textContent = current;
  highScore.textContent = high;
  timer.textContent = timerleft;
}

function statusMsg(msg) {
  statusMessage.textContent = msg;
}

function startGame() {
  current = 0;
  timerleft = 10;
  flag = true;

  clickButton.disabled = false;
  startButton.disabled = true;

  displayContext();

  setTimeout(function () {
    clickButton.textContent = ""; //  Task 2 -  "Click Me!" Message Flashes on Start
  }, 1500);

  statusMsg(` Game is Progress... Click Fast! `);

  timeid = setInterval(function () {
    timerleft--;
    displayContext();

    if (timerleft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timeid);
  timeid = null;
  flag = false;
  var x = current / 10; // task 4   Show Clicks Per Second (CPS)
  clickButton.disabled = true;
  startButton.disabled = false;

  clickButton.textContent = "Click Me!"; // task 2

  startButton.textContent = "Play Again"; // task 5   Start Button Says "Play Again" After Game

  clickButton.style.transform = "scale(1)"; // task 3

  if (current > high) {
    temp();
    statusMsg(`🎉 New High Score: ${current}! Amazing!  ${userName} 
               You clicked ${x} times per second!  `); // task 4
    setTimeout(function () {
      document.body.style.background = "gold";
    });
    // vido.style.display ="block";
  } else {
    statusMsg(`Game Over!  ${userName} score: ${current}  
                         You clicked ${x} times per second!  `); // task 4
  }
  var x = currentScore / 10;
  console.log(x);

  displayContext();
}

function userClick() {
  if (flag) {
    current++;

    if (current > 0 && current < 20) {
      clickButton.style.transform = `scale(${1 + current / 100})`; // task 3   Button Grows When You Click
    }

    displayContext();
  }
}

function resetScore() {
  const confirmed = confirm("Are you sure you want to reset your high score?");

  if (confirmed) {
    localStorage.removeItem("clickGameHighScore");
    high = 0;
    displayContext();
    statusMsg("High score has been reset!");
  }
}
function pauseGame() {
  clickButton.disabled = true;
  resetButton.disabled = true;
  resumeButton.style.display = "block";
  pauseButton.style.display = "none";
  clearInterval(timeid);
  statusMsg("The Game is Paused");
}
function resumeGame() {
  clickButton.disabled = false;
  resetButton.disabled = true;
  resumeButton.style.display = "none";
  pauseButton.style.display = "block";
  statusMsg(`Game is Progress... Click Fast!  `);
  timeid = setInterval(function () {
    timerleft--;
    displayContext();

    if (timerleft <= 0) {
      endGame();
    }
  }, 1000);
}

onWebsite();

clickButton.addEventListener("click", userClick);
startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetScore);
pauseButton.addEventListener("click", pauseGame);
resumeButton.addEventListener("click", resumeGame);
