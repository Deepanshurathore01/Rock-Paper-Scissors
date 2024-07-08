let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =document.querySelector('#user');
const compScorePara =document.querySelector('#computer');

const genCompChoice = () => {
  // rock, paper, scissors 
  let options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const DrawGame = () => {
  msg.innerText = "Game was Draw Play Again!";
  msg.style.backgroundColor ="grey";
  
}

const showWin = (userWin ,userChoice ,compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats comp ${compChoice}`;
    msg.style.backgroundColor ="green";
  } else {
    compScore++;
    compScorePara.innerText =compScore;
    msg.innerText = `You lose! Comp ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor ="red";
  }
}

const playGame = (userChoice) => {
  // generate computer choice
  const compChoice = genCompChoice();


  if (userChoice == compChoice) {
    // Draw
    DrawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = compChoice === 'paper' ? false : true;
    } else if (userChoice === 'paper') {
      // rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWin(userWin,userChoice , compChoice);
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
