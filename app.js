
let userScore = 0;
let computerScore = 0;

// caching the DOM (storing for future use)
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice () {
  const choicesAvailable = [
    'rock',
    'paper',
    'scissors',
  ];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choicesAvailable[randomNumber];
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);


  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  results_p.innerHTML = `${ capitalize(userChoice) }${ smallUserWord } beats ${ capitalize(computerChoice) }${ smallCompWord }. You Win!`;
  userChoice_div.classList.add('win-glow');
  setTimeout(() => userChoice_div.classList.remove('win-glow'), 500);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);

  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  results_p.innerHTML = `${ capitalize(userChoice) }${ smallUserWord } is beaten by ${ capitalize(computerChoice) }${ smallCompWord }. You Lose!`;

  userChoice_div.classList.add('lose-glow');
  setTimeout(() => userChoice_div.classList.remove('lose-glow'), 500);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);

  results_p.innerHTML = `You both chose ${ capitalize(userChoice) }. It's a Draw!`;

  userChoice_div.classList.add('draw-glow');
  setTimeout(() => userChoice_div.classList.remove('draw-glow'), 500);
}

function game (userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
      break;
  }

}
function main() {
  rock_div.addEventListener('click', () => game("rock"));
  paper_div.addEventListener('click', () => game("paper"));
  scissors_div.addEventListener('click', () => game("scissors"));
}
main();
