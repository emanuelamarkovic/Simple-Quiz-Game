class Question{
  constructor(text, options){
    this.text = text;
    this.options = options;
  }
  questionAndOptions(){
    return 0;
  }
  checkChoice(){ 
    return 0;
  }
};
const firstQuestion = new Question("Was ist der größte Berg der Erde?",['Mount Everest', 'Kangchendzönga', 'Annapurna']);
const secondQuestion = new Question("Welches gehört zu den sieben Weltwunder?", ['Die Pyramiden von Gizeh','Eiffelturm', 'Brandenburger Tor']);
