const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: 2
    },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1
    },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
    answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById('question');
  const options = document.querySelectorAll('.option');
  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  options.forEach((option, index) => {
    option.textContent = currentQuestion.options[index];
    option.style.backgroundColor = '#e1e1e1';
  });
}

function selectOption(selectedOptionIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const options = document.querySelectorAll('.option');
  if (selectedOptionIndex === currentQuestion.answer) {
    score++;
    options[selectedOptionIndex].style.backgroundColor = '#4caf50';
  } else {
    options[selectedOptionIndex].style.backgroundColor = '#f44336';
  }
  document.getElementById('score').textContent = `Score: ${score}`;
  currentQuestionIndex++;
  setTimeout(() => {
    if (currentQuestionIndex < questions.length) {
      updateProgressBar();
      loadQuestion();
    } else {
      showFinalScore();
    }
  }, 1000);
}

function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

function showFinalScore() {
  const quizContainer = document.querySelector('.quiz-container');
  quizContainer.innerHTML = `<h2>Your final score is ${score} out of ${questions.length}</h2>`;
}

window.onload = () => {
  loadQuestion();
  updateProgressBar();
};