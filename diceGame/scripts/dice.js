let diceArray = [];
let totalPoints = 0;
document.querySelector('#dice-roll-button').addEventListener('click', startGame);

function startGame() {
  rollDice();
  getValues();
}

function rollDice() {
  // PROCESSSING - Loop - roll 5 dice and save numbers to diceArray
  for (let i = 1; i <= 5; i++) {
    diceArray.push(Math.floor(Math.random() * 5) + 1);
  }
  // OUTPUT results in array to html to be viewed on DOM
  document.querySelector('#dice-rolled').innerHTML = `You rolled: ${diceArray}`;
}

function getValues() {
  let points = 0;
  let stayAlive = false;
  diceArray.map((die) => {
    if (die === 1) {
      stayAlive = true;
      points += 100;
    } else if (die === 5) {
      stayAlive = true;
      points += 50;
    }
  });
  diceArray = [];
  if (stayAlive) {
    totalPoints += points;
    document.querySelector('#score').innerHTML = `Score: ${points}`;
    document.querySelector('#score').innerHTML += `<br><strong>Total Score: ${totalPoints}</strong>`;
  } else {
    document.querySelector('#message').innerHTML = `You failed to roll a 1 or 5. Game Over!`;
    document.querySelector('#dice-roll-button').setAttribute('disabled', 'disabled');
  }
}