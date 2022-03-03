const displayComputerChoice = document.getElementById("computer-choice");
const displayUserChoice = document.getElementById("user-choice");
const displayResult = document.getElementById("result");
const choices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let theResult;

choices.forEach(choice => choice.addEventListener("click", (e) => {
  userChoice = e.target.id;
  displayUserChoice.innerText = userChoice; 
  computerSelection();
  result();
}))

const computerSelection = () => {
  const random = Math.floor(Math.random() * 3) + 1
  
  if(random === 1){
    computerChoice = "paper";
  }else if(random === 2){
    computerChoice = "rock";
  }else {
    computerChoice = "scissors"
  }

  displayComputerChoice.innerHTML = computerChoice;
}

const result = () => {
 if (computerChoice === userChoice){
  displayResult.innerHTML = "It's a Draw!!"
 }else if (computerChoice === "rock" && userChoice === "paper"){
  displayResult.innerHTML = "You Win"
 }else if (computerChoice === "paper" && userChoice === "scissors"){
  displayResult.innerHTML = "You Win!!"
 }else if (computerChoice === "paper" && userChoice === "rock"){
  displayResult.innerHTML = "You lose!!"
 }else if (computerChoice === "scissors" && userChoice === "rock"){
  displayResult.innerHTML = "You Win!!"
 }else if (computerChoice === "rock" && userChoice === "scissors"){
  displayResult.innerHTML = "You lose!!"
 }else if (computerChoice === "scissors" && userChoice === "paper"){
  displayResult.innerHTML = "You lose!!"
 }
}