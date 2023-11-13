const emojis = ["🐼", "🐼", "🐢", "🐢", "😍", "😍", "🐒", "🐒"];
const resetButton = document.getElementById("reset-button");
const startButton = document.getElementById('start-button');
// count players moves
let moveCount = 0;
const moveCountDisplay = document.createElement('div');
moveCountDisplay.classList = 'move-count-display';
const memoryBoard = document.querySelector('#memory-board');
// **** more consistent naming
const wonMessage = document.createElement('div');
wonMessage.classList = 'win-message';
wonMessage.id = 'won-message';
// missing if-condition?
memoryBoard.appendChild(wonMessage);

let hasCardFlipped = false;
let lockBoard = false;
let firstCard, secondCard;
let cardsMatched = 0;
// Save variable
let timerInterval;
let seconds = 0;
let isTiming = false;

// buttons
// startButton.addEventListener('click', function() {
//   startTimer();
// });
// resetButton.addEventListener("click", resetGame);

startButton.addEventListener('click', function() {
  startTimer();
  startButton.style.display = 'none';
  resetButton.style.display = 'inline-block';
});

resetButton.addEventListener("click", resetGame);
function resetGame() {
  startButton.style.display = 'inline-block';
  resetButton.style.display = 'none';
}

// Adding the resetBoard() function - Resetting the game variables for the course of the game
function resetBoard() {
  console.log("resetBoard")
  hasCardFlipped = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

function startTimer() {
  isTiming = true;
  timerInterval = setInterval(() => {
  seconds++;
}, 1000);

}
function stopTimer() {
  isTiming = false;
  clearInterval(timerInterval);
}

// Updates the display for the moves
function updateMoveCount() {
  console.log("updateMoveCount")
  moveCountDisplay.textContent = moveCount;
}

// Page is reloaded and the game is reset
function resetGame() {
  console.log("resetGame")
  window.location.reload();
}

// The function controls the turning over of cards and checks whether two face-up cards match
function flipCard() {
  console.log("flipCard")
  if (lockBoard || this === firstCard) return;

  this.classList.add('flip');

  if (!hasCardFlipped) {
    hasCardFlipped = true;
    firstCard = this;
  if (!isTiming) startTimer();
    } else {
    secondCard = this;
    hasCardFlipped = false;
    checkForMatch();
  }
}

// The function controls the turning over of cards and checks whether two face-up cards match.
function checkForMatch() {
  console.log("checkForMatch")
  moveCount++;
  updateMoveCount();

  if (firstCard.innerHTML === secondCard.innerHTML) {
    disableCards();
    cardsMatched += 2;
  if (cardsMatched === emojis.length) stopTimerAndDisplayWin();
  } else {
    unflipCards();
  }
}

// Stop timer and Display win is displayed and the win message appears
function stopTimerAndDisplayWin() {
  stopTimer();
  //declared twice
  //const wonMessage = document.getElementById('won-message');
  wonMessage.style.display = 'block';
  wonMessage.style.fontSize = '20px';
  wonMessage.style.fontWeight = 'bolder'
  wonMessage.style.width = '80%';
  wonMessage.style.backgroundColor = 'yellow';
  wonMessage.style.padding = '0.5rem'
  wonMessage.style.color = 'black';
  wonMessage.style.position = 'absolute';
  wonMessage.style.zIndex = '1';
  wonMessage.textContent = `Congratulations 🎆 ! You won in ${seconds} seconds with ${moveCount} moves!`;
}

// Deactivating found card pairs
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

// Reversing the cards after a delay - Resetting the game board after reversing the cards
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  resetBoard();
  }, 1500);
}

// Card creation loop - Random arrangement of emojis on the cards - Adding the generated cards
let shuffledEmojis = emojis.sort(() => Math.random() - 0.5);
for (let i = 0; i < emojis.length; i++) {
  const card = document.createElement("div");
  card.className = "memory-card";
  card.innerHTML = `
    <div class='card-inner'>
      <div class='card-cover'>${shuffledEmojis[i]}</div>
      <div class='card-back'>🤯</div>
    </div>
  `;
  memoryBoard.appendChild(card);
}
const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));

