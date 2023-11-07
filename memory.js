// make a memory game - what functions are needed:
// funktion flip
// function unflip
// function checkForMatch

const emojis = ["🐼", "🐼", "🐢", "🐢", "😍", "😍", "🐒", "🐒"];
const resetButton = document.getElementById("reset-button");
// create cards
let shuffledEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (let i = 0; i < emojis.length; i++) {
  const cards = document.createElement("div");
  cards.className = "memory-card";
  cards.innerHTML = shuffledEmojis[i];
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
    checkForMatch()
  }
}

function unflipCards(){
  console.log('unflip');
  // remove classlist('flip')
}

function lock(){
  // cards bleiben aufgedeckt
  console.log('lock!')
}
function checkForMatch (){
  firstCard.dataset.picture === secondCard.dataset.picture ? lock() : unflipCards()
}

cards.forEach(card => card.addEventListener("click", flipCard))

