const questions =[
  {
    question: "Was bedeutet die abkürzung CPU?",
    answers: [
      {text: "Keine Ahnung", correct: false},
      {text: "Cebtral Process Unit", correct: false},
      {text: "Central Process utility", correct: false},
      {text: "Central Processing Unit", correct: true}
    ]
    
  },
  {
    question: "Welche aufgabe hat das Rechenwerk(ALU) in einer CPU?",
    answers: [
      {text: "Daten speichern", correct: false},
      {text: "Mathematische und logische Berechnungen durchführen ", correct: true},
      {text: "Keine Ahnung ", correct: false},
      {text: "befehle decodieren ", correct: false}
    ]
  },
  {
    question: "Was ist ein Kern(Core) in einer CPU?",
    answers: [
      {text: "DEin Teil des Arbeitspeicher", correct: false},
      {text: "Eine Einheit, die eigentständige Befehle verarbeiten kann", correct: true},
      {text: "Die Prozessor-CPU hat weniger Kerne", correct: false},
      {text: "Die Kernprocessor-CPU hat weniger Kerne", correct: false}
    ]
  },
  {
    question: "Was ist ein Register in einer CPU?",
    answers: [
      {text: "Ein Speicherplatz, in dem Daten gespeichert werden", correct: true},
      {text: "Ein Teil des Arbeitspeicher", correct: false},
      {text: "Ein Teil der Prozessor-CPU", correct: false},
      {text: "Keine Ahnung", correct: false}
    ]
  },
  {
    question: "Was bedeutet der Begriff Cache bei Prozessoren",
    answers: [
      {text: "Ein schneller Zwischenspeicher für Daten", correct: true},
      {text: "Keine Ahnung, ich weis es nicht", correct: false},
      {text: "Eine Art von Software", correct: false},
      {text: "ein externer speicher", correct: false}
    ]
  },
  {
    question: "Was ist ein Befehl in einer CPU?",
    answers: [
      {text: "Ein gespeichertes Programm", correct: false},
      {text: "Ein Programm, das ausgeführt wird", correct: true},
      {text: "Ein Teil des Arbeitspeicher", correct: false},
      {text: "Ein Teil der Prozessor-CPU", correct: false}
    ]
  },
  {
    question: "Was ist der Unterschied zwischen 32-Bit und 64-Bit Prozessoren?",
    answers: [
      {text: "Die Menge an Daten, die gleichzeitig verarbeitet werden", correct: true},
      {text: "Die Anzahl an Transistoren", correct: false},
      {text: "Keine Ahnung", correct: false},
      {text: "Ein gedrucktes Bild", correct: false}
    ]
  },
  {
    question: "Was passiert, wenn eine CPU überlastet wird?",
    answers: [
      {text: "Sie arbeitet schneller", correct: false},
      {text: "rein gar nichts ", correct: false},
      {text: "Keine Ahnung frag deine Lehrerin", correct: false},
      {text: "sie wird langsamer und überhitzt", correct: true}
    ]

  },
  {
    question: "Glaubst du das diese Webseiite meine NW Note bessern kann?",
    answers: [
      {text: "Nö", correct: false},
      {text: "Ja natürlich ", correct: true},
      {text: "Keine Ahnung frag deine Lehrerin", correct: false},
      {text: "ich enthalte mich von dieser Frage", correct: true}
    ]
  }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-butttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answer.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button); 
    if(answer.correct){
      button.dataset.correct = answer.correct;

    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none"
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }

}
startQuiz();