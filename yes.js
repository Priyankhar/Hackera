const questions = [
  {
    text: "A stranger gives you a compliment and asks for a private chat.",
    answer: "red"
  },
  {
    text: "Your friend double checks before posting your group photo.",
    answer: "green"
  },
  {
    text: "You’re offered free money for clicking a link.",
    answer: "red"
  },
  {
    text: "You enable 2-factor authentication for your social media.",
    answer: "green"
  },
  {
    text: "Someone you don’t know asks for your home address online.",
    answer: "red"
  },
  {
    text: "You report a suspicious message to a parent or teacher.",
    answer: "green"
  },
  {
    text: "A person online asks you to keep your chat secret from everyone.",
    answer: "red"
  },
  {
    text: "You cover your webcam when not using it.",
    answer: "green"
  },
  {
    text: "You’re told you must pay a fee to claim a contest prize.",
    answer: "red"
  },
  {
    text: "You create a password with upper & lower case letters, numbers, and symbols.",
    answer: "green"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  if (currentQuestion < questions.length) {
    questionEl.textContent = questions[currentQuestion].text;
    feedbackEl.textContent = "";
  } else {
    questionEl.textContent = "🎉 Game Over! You’re a true CyberGuardian!";
    document.querySelector(".button-container").style.display = "none";
    feedbackEl.textContent = `Your final score is ${score} / ${questions.length}`;
  }
}

function handleAnswer(choice) {
  const correct = questions[currentQuestion].answer;
  if (choice === correct) {
    score++;
    feedbackEl.textContent = "✅ Correct!";
    feedbackEl.style.color = "lightgreen";
  } else {
    feedbackEl.textContent = "🚫 Not Safe!";
    feedbackEl.style.color = "salmon";
  }
  scoreEl.textContent = score;
  currentQuestion++;
  setTimeout(loadQuestion, 1000);
}

document.getElementById("red-flag").addEventListener("click", () => handleAnswer("red"));
document.getElementById("green-flag").addEventListener("click", () => handleAnswer("green"));

loadQuestion();
