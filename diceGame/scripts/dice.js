let diceArray = [];
let totalPoints = 0;
document.querySelector('#roll_dice_button').addEventListener('click', startGame);

function startGame() {
  rollDice();
  let pointValues = getValues();
  sumOfValues(pointValues);
}

function rollDice() {
  // roll 5 dice and save rolled numbers to diceArray
  for (let i = 1; i <= 5; i++) {
    diceArray.push(Math.floor(Math.random() * 5) + 1);
  }
  // OUTPUT results in array to html to be viewed on DOM
  document.querySelector('#dice_rolled').innerHTML = `You rolled: ${diceArray}`;
}

let pointValues = [];

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
  if (stayAlive) {
    totalPoints += points;
    document.querySelector('#testing').innerHTML = `This Roll: ${totalPoints}`;
    return points;
  } else {
    document.querySelector('#testing').innerHTML = `You failed to roll a 1 or 5. Game Over!`;
    document.querySelector("roll_dice_button").setAttribute('disabled');
  }
}

function sumOfValues(pointValues) {
  // None of these work!
  // The pointValues array is an array before this function, but inside this function, it doesn't see it as one.

  // for(var result = 0; i < pointValues.length; i++){
  //     total += pointValues[i];
  // };

  // pointValues.forEach(point => {
  //     result += point;
  // });

  // const add = (a, b) => a + b;
  // const result = pointValues.reduce(add);

  // for (let value of pointValues) {
  //     result += value;
  // };

  // let result = pointValues.reduce((a, b) => a + b);

  document.querySelector('#totalPoints').innerHTML = totalPoints;
}
