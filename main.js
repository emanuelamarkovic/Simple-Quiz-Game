class Question{
  constructor(text, options){
    this.text = text;
    this.options = options;
  }
  questionAndOptions(){
    return `<div id=question>${this.text}</div> ${this.options.map(option => `<div>${option[0]}</div>`)}`
  }
  checkChoice(){ 
    return 0;
  }
};
const firstQuestion = new Question("Was ist der größte Berg der Erde?",[['Mount Everest', 1], ['Kangchendzönga', 0], ['Annapurna', 0]]);

const secondQuestion = new Question("Welches gehört zu den sieben Weltwundern?", [['Die Pyramiden von Gizeh', 1],['Eiffelturm', 0], ['Brandenburger Tor', 0]]);

const thirdQuestion = new Question("Seit wann gibt es Bier?", [['Seit ca. 7000 v.u.Z', 1], ['seit ca 2000 Jahren', 0], ['seit 1516', 0]])

console.log(secondQuestion.questionAndOptions())
