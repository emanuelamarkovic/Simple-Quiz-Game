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
let currentQuestion = getQuestion();
const nextQuestion = getQuestion();

// ----------- html-stuff ----------
const optionDivs = document.getElementsByClassName('option');
const question = document.getElementById("question");
const button = document.querySelector('button');
//console.log(button)
//console.log(optionDivs);
//const optionDivs2 = document.querySelectorAll('.option');
//console.log(optionDivs2);
button.addEventListener('click', startGame);
//console.log('next question: ', nextQuestion)
//console.log('current question: ', currentQuestion)
question.innerHTML = currentQuestion.questionAndOptions();

// test checkChoice
console.log("curQu CC", currentQuestion.checkChoice());
console.log('score: ', score);

const test = optionDivs => console.log('optionDivs[i]', optionDivs);
// call checkChoice?
for (let i = 0; i < optionDivs.length; i++) {
  optionDivs[i].addEventListener("click", test(optionDivs[i]))
};

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
