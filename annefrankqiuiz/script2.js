const questions = [
  {
    question: "Wie beschreibt Anne Frank die Beziehung zu ihrer Schwester Margot und wie entwickelt sich diese im Verlauf des Tagebuchs??",
    answers: [
      { text: "Margot ist Annes größte Konkurrentin im Versteck, und sie streiten sich ständig.", correct: false },
      { text: "Anne ist neidisch auf Margot, weil diese von den Eltern bevorzugt wird.", correct: false },
      { text: "Anne und Margot sind von Anfang an unzertrennlich und teilen alle Geheimnisse.", correct: false },
      { text: "Anfangs empfindet Anne eine gewisse Distanz zu Margot, da sie sich mit ihrer älteren Schwester nicht besonders verbunden fühlt.", correct: true }
    ]
  },
  {
    question: " Welche Rolle spielt das „Hinterhaus“ als physischer Raum für Annes psychische und emotionale Entwicklung?",
    answers: [
      { text: "Das Hinterhaus ist für Anne ein Ort der Freiheit, an dem sie sich voll entfalten kann.", correct: false },
      { text: "Mathematische und logische Berechnungen  Das Hinterhaus wird für Anne zu einem Ort der Enge und Einschränkung, der ihre Gefühle von Isolation und Angst verstärkt.", correct: true },
      { text: " Anne empfindet das Hinterhaus als sicheren Hafen, in dem sie keine Angst vor der Außenwelt hat.", correct: false },
      { text: "Das Hinterhaus ist für Anne ein Ort der Langeweile, an dem sie keine emotionalen Entwicklungen durchmacht.", correct: false }
    ]
  },
  {
    question: "Wie reflektiert Anne Frank ihre Identität als Jüdin in einer Zeit der Verfolgung, und wie beeinflusst dies ihr Selbstbild?",
    answers: [
      { text: " Anne ist stolz darauf, Jüdin zu sein, und sieht die Verfolgung als Herausforderung, die sie stärker macht.", correct: false },
      { text: "Anne fühlt sich durch die Verfolgung ihrer Identität beraubt und fragt sich, warum sie als Jüdin anders behandelt wird", correct: true },
      { text: "Anne distanziert sich von ihrer jüdischen Identität und möchte nicht mehr als Jüdin gesehen werde", correct: false },
      { text: "Anne versteht die Gründe für die Verfolgung und akzeptiert sie als Teil ihres Schicksals.", correct: false }
    ]
  },
  {
    question: "Wie charakterisiert Anne Frank die anderen Bewohner des Hinterhauses, und welche Konflikte entstehen dadurch?",
    answers: [
      { text: "Anne beschreibt die anderen Bewohner oft sehr kritisch, insbesondere die Streitigkeiten mit Frau van Daan.", correct: true },
      { text: "Anne findet alle Bewohner des Hinterhauses sympathisch und hat keine Konflikte mit ihnen.s", correct: false },
      { text: "Anne bewundert vor allem Herrn van Daan für seine Gelassenheit und Weisheit.", correct: false },
      { text: " Anne hat nur Konflikte mit ihrer Mutter, während sie zu allen anderen ein gutes Verhältnis hat.", correct: false }
    ]
  },
  {
    question: "Welche Rolle spielt Peter van Daan in Annes Leben, und wie verändert sich ihre Beziehung zu ihm im Laufe der Zeit?",
    answers: [
      { text: "Im Laufe der Zeit entwickelt sie Gefühle für ihn und sieht in ihm einen Verbündeten im Versteck", correct: true },
      { text: " Peter ist von Anfang an Annes engster Vertrauter, und sie verlieben sich sofort ineinander", correct: false },
      { text: " Anne findet Peter uninteressant und ignoriert ihn während der gesamten Zeit im Versteck.", correct: false },
      { text: " Peter ist für Anne nur ein Freund, und ihre Beziehung bleibt platonisch.", correct: false }
    ]
  },
  {
    question: "Wie beschreibt Anne Frank ihre Beziehung zu ihren Eltern, insbesondere zu ihrem Vater Otto Frank, und wie verändert sich diese im Versteck?",
    answers: [
      { text: "Anne hat ein besseres Verhältnis zu ihrer Mutter als zu ihrem Vater.", correct: false },
      { text: "Anne hat eine sehr enge Beziehung zu ihrem Vater, den sie als verständnisvoll und unterstützend empfindet.", correct: true },
      { text: "Anne lehnt ihren Vater ab, weil er zu streng ist.", correct: false },
      { text: "Anne fühlt sich von beiden Eltern gleich verstanden und geliebt.", correct: false }
    ]
  },
  {
    question: "Welche Bedeutung haben die Nachrichten von außen (z. B. über den Kriegsverlauf) für die Bewohner des Hinterhauses, und wie reagieren sie darauf?",
    answers: [
      { text: "Die Nachrichten von außen geben den Bewohnern Hoffnung, aber auch Angst, da sie nie sicher sind, was als Nächstes passiert.", correct: true },
      { text: "Die Bewohner ignorieren die Nachrichten von außen, da sie ihnen keine Hoffnung geben.", correct: false },
      { text: " Die Nachrichten führen immer zu Freude und Optimismus im Hinterhaus", correct: false },
      { text: " Anne interessiert sich nicht für die Nachrichten, da sie sich nur auf ihr Tagebuch konzentriert.", correct: false }
    ]
  },
  {
    question: " Wie reflektiert Anne Frank ihre eigenen Träume und Zukunftspläne im Kontrast zu der Realität des Verstecks?",
    answers: [
      { text: " Anne träumt davon, nach dem Krieg eine Karriere als Schauspielerin zu beginnen.", correct: false },
      { text: " Anne möchte nach dem Krieg in die USA auswandern und dort ein neues Leben beginnen.", correct: false },
      { text: "Anne hat keine Träume oder Zukunftspläne, da sie keine Hoffnung auf eine Zukunft hat.", correct: false },
      { text: "Anne träumt davon, Schriftstellerin zu werden und ihr Tagebuch zu veröffentlichen", correct: true }
    ]
  },
  {
    question: " Welche Rolle spielen die Helfer (z. B. Miep Gies) für die Bewohner des Hinterhauses, und wie werden sie von Anne beschrieben?",
    answers: [
      { text: "Anne misstraut den Helfern und glaubt, dass sie sie verraten könnten.", correct: false },
      { text: "Anne beschreibt die Helfer als selbstlose und mutige Menschen, die ihr Leben riskieren, um die Gruppe zu unterstützen", correct: true },
      { text: "Die Helfer werden von Anne als egoistisch und nur auf ihren eigenen Vorteil bedacht beschrieben.", correct: false },
      { text: " Anne hat kaum Kontakt zu den Helfern und weiß nicht viel über sie.", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Weiter";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Du hast ${score} von ${questions.length} Punkten erreicht.`;
  nextButton.innerHTML = "Nochmal";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
