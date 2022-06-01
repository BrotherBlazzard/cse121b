// Week 06 Project
// Pull a random image from an API

// Get the API and declare variables
const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';

// Set the max random number limit
const numberLimit = 16;

// Create an array for the temple pictures
var templeList = new Array();

// Funtion to append all the temple pictures to a list
function output(temples) {
  var count = 0;
  temples.forEach((temple) => {
    let picture = document.createElement('image');

    let img = document.createElement('img');
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', temple.templeName);

    picture.appendChild(img);

    templeList[count] = new Image();
    templeList[count].src = temple.imageUrl;
    count++;
  });
}

// Create a funtion that grabs the api file
async function getTemples() {
  const response = await fetch(url);
  templeList = await response.json();
  output(templeList);
}

// Create a funtion to clear the current image that is there
function reset() {
  document.querySelector('#image').innerHTML = '';
}

// Funtion to perform action when the HTML button is pressed
function add() {
  // Make sure that the section is clear
  reset();

  // Get a random number
  const randoNumber = Math.floor(Math.random() * numberLimit);

  // Call the funtion to create the temple list
  getTemples();

  // Insert the random temple image in the HTML
  document.querySelector('#image').appendChild(templeList[randoNumber]);
}
