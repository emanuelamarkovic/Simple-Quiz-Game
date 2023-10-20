class Question{
  constructor(text, options){
    this.text = text;
    this.options = options;
  }
  questionAndOptions(){
    return `<div id=question>${this.text}</div> ${this.options.map(option => `<div class=option>${option[0]}</div>`)}`
  }
  checkChoice(){
    console.log(this.options[0][0]); 
    return this.options[0][1] === 1 ? score++ : 0 
  }
};

// --------- questions --------------
const questions = [
  new Question("Was ist der größte Berg der Erde?",[['Mount Everest', 1], ['Kangchendzönga', 0], ['Annapurna', 0]]),
  new Question("Welches gehört zu den sieben Weltwundern?", [['Die Pyramiden von Gizeh', 1],['Eiffelturm', 0], ['Brandenburger Tor', 0]]),
  new Question("Seit wann gibt es Bier?", [['Seit ca. 7000 v.u.Z', 1], ['seit ca 2000 Jahren', 0], ['seit 1516', 0]]),
]

// --------- variables -------------
let score = 0;
let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];
let nextQuestion = [];

// ----------- html-stuff ----------
//TODO change in html: question to questionsContainer
const questionsContainer = document.getElementById('questionsContainer');
const question = document.getElementById("questionsContainer");
//event delegation: 
questionsContainer.addEventListener('click', event => {
  console.log(event.target)
  if (event.target.classList.contains('option')) {
    const selectedOptionIndex = Array.from(questionsContainer.children).indexOf(event.target);
    handleUserChoice(selectedOptionIndex);
  }});
question.innerHTML = currentQuestion.questionAndOptions();

// test checkChoice
console.log("curQu CC", currentQuestion.checkChoice());
console.log('score: ', score);

function handleUserChoice(i) {
  console.log('click!', i);
  // hardcoded 1
  const isCorrect = 1; 
  if (isCorrect) {
    score++;
  }
  console.log('score++ ', score );
  currentQuestion = getQuestion();
  console.log('current question 2', currentQuestion);

function startGame () {
  //if (button.innerHTML === 'Start'){
  //  button.innerHTML = "restart"
 // }
};

function toggleStartButton () {
  if (button.innerHTML === 'Start'){
    button.innerHTML = "restart"
  }
};

function getQuestion() {
  if (currentQuestionIndex < questions.length) {
    const nextQuestion = questions[currentQuestionIndex];
    currentQuestionIndex++;
    return nextQuestion;
  }
  else {
    //restart the game? show score?
    toggleStartButton()
  }
};
