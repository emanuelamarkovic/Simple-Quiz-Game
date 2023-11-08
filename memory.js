const emojis = ["🐼", "🐼", "🐢", "🐢", "😍", "😍", "🐒", "🐒"];
const resetButton = document.getElementById("reset-button");
let moveCount = 0;
const moveCountDisplay = document.createElement('div');
moveCountDisplay.classList = 'move-count-display'
const memoryBoard = document.querySelector('#memory-board');
memoryBoard.appendChild(moveCountDisplay);
moveCountDisplay.innerText = '0';

// create cards
let shuffledEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (let i = 0; i < emojis.length; i++) {
  const cards = document.createElement("div");
  cards.className = "memory-card";
  cards.innerHTML = `<div class='card-inner'>
    <div class='card-cover'>
    ${shuffledEmojis[i]}
    </div>
    <div class='card-back'></div>
    </div>
    `
  document.querySelector("#memory-board").appendChild(cards);
}
const cards = document.querySelectorAll('.memory-card');

function resetGame() {
  window.location.reload();
}
resetButton.addEventListener("click", resetGame);

// are any cards already flipped?
let hasCardFlipped = false;
// for a pair of cards
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');
  if (!hasCardFlipped) {
    hasCardFlipped = true;
    firstCard = this;
    console.log(firstCard);
  } else {
    hasCardFlipped = false;
    secondCard = this;
    console.log(secondCard);
    checkForMatch();
  }
}
// pictures are covered
function unflipCards() {
  console.log('unflip');
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
}, '1500')
}

function lock() {
  // cards stay flipped
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}
function checkForMatch() {
moveCount++;
moveCountDisplay.innerText = moveCount;
console.log(moveCount)
firstCard.innerHTML === secondCard.innerHTML ? lock() : unflipCards();
}

cards.forEach(card => card.addEventListener("click", flipCard));