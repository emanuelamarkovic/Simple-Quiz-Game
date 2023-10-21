class Question{
  constructor(text, options){
    this.text = text;
    this.options = options;
  }
  questionAndOptions(){
    return `<div id=question>${this.text}</div> ${this.options.map(option => `<div class=option>${option[0]}</div>`).join('')}`
  }
  checkChoice(selectedOptionIndex){
    //console.log('this.options[selectedOptionIndex][1]', this.options[selectedOptionIndex][1]); 
    return this.options[selectedOptionIndex][1] === 1 ? 1 : 0;
  }
};

// --------- questions --------------
const questions = [
  new Question("Was ist der größte Berg der Erde?",[['Mount Everest', 1], ['Kangchendzönga', 0], ['Annapurna', 0]]),
  new Question("Welches gehört zu den sieben Weltwundern?", [['Die Pyramiden von Gizeh', 1],['Eiffelturm', 0], ['Brandenburger Tor', 0]]),
  new Question("Seit wann gibt es Bier?", [['seit ca 2000 Jahren', 0], ['Seit ca. 7000 v.u.Z', 1], ['seit 1516', 0]]),
]

// --------- variables -------------
let score = 0;
let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];
let nextQuestion = [];

// ----------- html-stuff ----------
const questionsContainer = document.getElementById('questionsContainer');
const question = document.getElementById("questionsContainer");
const button = document.getElementById('startButton');
button.addEventListener('click', toggleStartButton);
//event delegation: 
questionsContainer.addEventListener('click', event => {
  console.log(event.target)
  if (event.target.classList.contains('option')) {
    const selectedOptionIndex = Array.from(questionsContainer.children).indexOf(event.target) -1;
    handleUserChoice(selectedOptionIndex);
  }});
question.innerHTML = currentQuestion.questionAndOptions();

// test checkChoice
//console.log("curQu CC", currentQuestion.checkChoice(currentQuestionIndex));
//console.log('score: ', score);

function handleUserChoice(selectedOptionIndex) {
//  console.log('click!', selectedOptionIndex);
  const isCorrect = currentQuestion.checkChoice(selectedOptionIndex);
//  console.log('currentquestioncheckchoice: ', currentQuestion.checkChoice(currentQuestionIndex));
  if (isCorrect) {
    score++;
  }
//  console.log(isCorrect, score)
  currentQuestion = getQuestion();
//  console.log('current question 2', currentQuestion);

  if (currentQuestion) {
    question.innerHTML = currentQuestion.questionAndOptions();
  } else {
      if (score === questions.length) {
       question.innerHTML = `Everything rigth! 👻\nYour score is ${score}!`;
       toggleStartButton;
       return;
      } else {
        question.innerHTML = `Your score is ${score}`;
        toggleStartButton;
        return;
      }
  }
};

function getQuestion() {
  if (currentQuestionIndex < questions.length) {
  //  console.log(currentQuestionIndex);
    currentQuestionIndex++;
    nextQuestion = questions[currentQuestionIndex];
  //  console.log(currentQuestionIndex, 'next question', nextQuestion);
    return nextQuestion;
  }
  else {
    //restart the game? show score?
    toggleStartButton();
  }
};

// ------------ button -----------
function toggleStartButton () {
  if (button.innerHTML === 'Start'){
    button.innerHTML = "Restart";
    resetGame();
  } else {
    button.innerHTML = "Start";
    resetGame();
  }
};

function resetGame () {
  console.log('reset game ')
  score = 0;
  currentQuestionIndex = 0;
  currentQuestion = questions[currentQuestionIndex];
  question.innerHTML = currentQuestion.questionAndOptions();
}

// function startGame () {};
