// --------- drop-down -------------
const header = document.querySelector('header');
const dropdownButton = document.createElement('div');
dropdownButton.classList = 'dropdown-menue';
dropdownButton.innerHTML = `<h2 class='dropdown-menue'>X</h><div class="options"></div`;
header.appendChild(dropdownButton);
const options = document.getElementsByClassName('options');
options[0].style.display = 'none';
//console.log(options);
const htmlFiles = ['memory.html', 'index.html'];
htmlFiles.forEach(htmlFile => {
  console.log('htmlfile ', htmlFile);
  const option = document.createElement('option');
  const linkNameArr = htmlFile.split('.');
  option.innerHTML = `<a href=${htmlFile}>${linkNameArr[0]}</a>`;
  options[0].appendChild(option);
})

dropdownButton.addEventListener('click', () => {
  if (options[0].style.display === 'block') {
    options[0].style.display = 'none';
  } else {
    options[0].style.display = 'block';
  }
});
// ********* QUIZ GAME ***********
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
