class Question{
  constructor(text, options){
    this.text = text;
    this.options = options;
  }
  questionAndOptions(){
    return `<div id=question>${this.text}</div> <div>${this.options}</div>` 
  }
  checkChoice(){ 
    return 0;
  }
};
const firstQuestion = new Question("Was ist der größte Berg der Erde?",['Mount Everest', 'Kangchendzönga', 'Annapurna']);

const secondQuestion = new Question("Welches gehört zu den sieben Weltwundern?", ['Die Pyramiden von Gizeh','Eiffelturm', 'Brandenburger Tor']);

const thirdQuestion = new Question("Seit wann gibt es Bier?", ['Seit ca. 7000 v.u.Z', 'seit ca 2000 Jahren', 'seit 1516'])

console.log(secondQuestion.questionAndOptions())
