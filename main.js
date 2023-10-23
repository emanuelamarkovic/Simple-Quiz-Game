import { questions } from './Questions.js';

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

function handleUserChoice(selectedOptionIndex) {
  const isCorrect = currentQuestion.checkChoice(selectedOptionIndex);
  if (isCorrect) {
    score++;
  };
  currentQuestion = getQuestion();
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
    };
  };
};

function getQuestion() {
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    nextQuestion = questions[currentQuestionIndex];
    return nextQuestion;
  }
  else {
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
};
