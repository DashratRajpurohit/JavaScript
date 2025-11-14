const textDisplay = document.querySelector("#textDisplay");
const typingArea = document.querySelector("#typingArea");
const timerDisplay = document.querySelector("#timer");
const wpmDispaly = document.querySelector("#wpm");
const accuracyDispaly = document.querySelector("#accuracy");
const bestWPMDisplay = document.querySelector("#bestWPM");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const fifteen = document.querySelector("#sec15");
const thirty = document.querySelector("#sec30");
const sixty = document.querySelector("#sec60");

const testTexts = [
  "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster. ",
  "Technology has revolutionized the way we communicate and work in the modern digital era. ",
  "Typing speed is an essential skill for anyone working with computers in today's workplace. ",
];

let currentText = "";
let timeLeft = 60;
let timerInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;

function webLoad() {
  onload();
  displayContent();
}

function onload() {
  var temp = sessionStorage.getItem("getHighWpm");
  if (temp != null) {
    bestWPM = parseInt(temp);
  } else {
    bestWPM = 0;
  }
}

function displayContent() {
  timerDisplay.textContent = timeLeft;
  bestWPMDisplay.textContent = bestWPM;
}

webLoad();

function endGame() {
  clearInterval(timerInterval);
  timeLeft = 60;
  startBtn.disabled = false;

  if (wpm > bestWPM) {
    bestWPM = wpm;
    sessionStorage.setItem("getHighWpm", bestWPM);
    alert(`scored high score then previous one`);
  } else {
    alert(`scored is : ${wpm}`);
  }

  wpm = 0;  
  wpmDispaly.textContent = wpm;
  typingArea.disabled = true;
  typingArea.value = "";
  fifteen.style.pointerEvents = "auto";
  thirty.style.pointerEvents = "auto";
  sixty.style.pointerEvents = "auto";
  displayContent();
}

function startGame() {
  // timeLeft = 60;
  startBtn.disabled = true;
  fifteen.style.pointerEvents = "none";
  thirty.style.pointerEvents = "none";
  sixty.style.pointerEvents = "none";

  currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
  textDisplay.textContent = currentText;

  typingArea.disabled = false;
  typingArea.value = "";
  typingArea.setAttribute(
    "placeholder",
    "Now the input box is enabed, use it to write something......"
  );

  timerInterval = setInterval(function () {
    timeLeft--;
    if (timeLeft <= 0) {
      endGame();
    }
    displayContent();
  }, 1000);
}

function updateStatus() {
  var typed = typingArea.value;
  const minute = Math.floor(Date.now() - startTime) / 1000 / 60;
  const word = typed
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);

  const wpm = minute > 0 ? Math.floor(word.length / minute) : 0;
  wpmDispaly.textContent = wpm;

  var currentScore = 0;

  // to add more text

  if (currentText.length - 1 == typed.length) {
    currentText += testTexts[Math.floor(Math.random() * testTexts.length)];
    textDisplay.textContent = currentText;
    highlight();
  }

  for (var i = 0; i < currentText.length; i++) {
    if (currentText[i] === typed[i]) {
      currentScore++;
    }
  }
  const accuracy =
    typed.length > 0 ? Math.floor((currentScore / typed.length) * 100) : 0;

  accuracyDispaly.textContent = accuracy;
}

function highlight() {
  var typed = typingArea.value;
  var highText = "";

  for (let i = 0; i < currentText.length; i++) {
    if (i <= typed.length) {
      if (currentText[i] === typed[i]) {
        highText += `<span class = "correct">${currentText[i]}</span>`;
      } else {
        highText += `<span class = "incorrect">${currentText[i]}</span>`;
      }
    } else {
      highText += currentText[i];
    }
  }
  textDisplay.innerHTML = highText;
}

function typeControl() {
  if (startTime == null) {
    startTime = Date.now();
  }
  // console.log(startTime);
  updateStatus();

  highlight();
}

startBtn.addEventListener("click", startGame);

typingArea.addEventListener("input", typeControl);

fifteen.addEventListener("click", function () {
  timeLeft = 15;
  webLoad();
});
thirty.addEventListener("click", function () {
  timeLeft = 30;
  webLoad();
});
sixty.addEventListener("click", function () {
  timeLeft = 60;
  webLoad();
});
