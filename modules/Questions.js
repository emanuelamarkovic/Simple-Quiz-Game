class Question{
  constructor(text, options){
    this.text = text;
    this.options = options;
  }
  questionAndOptions(){
    return `<div id=question>${this.text}</div> ${this.options.map(option => `<div class=option>${option[0]}</div>`).join('')}`
  }
  checkChoice(selectedOptionIndex){
    return this.options[selectedOptionIndex][1] === 1 ? 1 : 0;
  }
};
export const questions = [
  new Question("Was ist der größte Berg der Erde?",[['Mount Everest', 1], ['Kangchendzönga', 0], ['Annapurna', 0]]),
  new Question("Welches gehört zu den sieben Weltwundern?", [['Die Pyramiden von Gizeh', 1],['Eiffelturm', 0], ['Brandenburger Tor', 0]]),
  new Question("Seit wann gibt es Bier?", [['Seit ca. 7000 v.u.Z', 1], ['seit ca 2000 Jahren', 0], ['seit 1516', 0]]),
  new Question("Wann waren die Rosenkriege?", [['1989 mit Dany DeVito und Kathleen Turner', 0], ['1455 bis 1485 mit York und Lancaster', 1]]),
  new Question("Was ist die O-Notation?", [['Sie macht die Laufzeit von Algorhytmen vergleichbar.', 0], ['Sie macht die Laufzeit von Algorithmen vergleichbar.', 1], ['Sie macht die Laufzeit von Algorhitmen vergleichbar.', 0]]),
];
