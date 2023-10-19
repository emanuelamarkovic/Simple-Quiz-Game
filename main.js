class Question{
  constructor(text, options){
    this.text = text;
    this.options = options;
  }
  questionAndOptions(){
    return `<div id=question>${this.text}</div> ${this.options.map(option => `<div class=option>${option[0]}</div>`)}`
  }
  checkChoice(){ 
    return 0;
  }
};

// --------- questions --------------
const firstQuestion = new Question("Was ist der größte Berg der Erde?",[['Mount Everest', 1], ['Kangchendzönga', 0], ['Annapurna', 0]]);

const secondQuestion = new Question("Welches gehört zu den sieben Weltwundern?", [['Die Pyramiden von Gizeh', 1],['Eiffelturm', 0], ['Brandenburger Tor', 0]]);

const thirdQuestion = new Question("Seit wann gibt es Bier?", [['Seit ca. 7000 v.u.Z', 1], ['seit ca 2000 Jahren', 0], ['seit 1516', 0]])

//console.log(secondQuestion.questionAndOptions());

// ----------- html-stuff ----------
let currentQuestion = firstQuestion // need code to toggle
const optionDivs = document.getElementsByClassName('option');
const question = document.getElementById("question");
const button = document.querySelector('button');
console.log(button)
console.log(optionDivs);
//const optionDivs2 = document.querySelectorAll('.option');
//console.log(optionDivs2);
button.addEventListener('click', startGame)
question.innerHTML = firstQuestion.questionAndOptions();

for (let i = 0; i < optionDivs.length; i++) {
  console.log(optionDivs[i])
  optionDivs[i].addEventListener("click", () => console.log("yay!"));
};

function startGame () {
  console.log(button.innerHTML);
  if (button.innerHTML === 'Start'){
    button.innerHTML = "restart"
  }
};
