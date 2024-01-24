/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
const fullName = "Brother Blazzard";
const currentYear = new Date().getFullYear(); // "2024"
const profilePicture = "images/blazzard.png";

/* Step 3 - Element Variables */


const foodElement = document.querySelector('#block');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */


yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}. He is a online faculty member in the CSE department at BYU-Idaho.`);


/* Step 5 - Array */
let favfoods = ["Pizza", "Ice Cream", "Tacos", "Sushi", "Pasta", "Burgers", "Steak", "Chicken", "Salad", "Fruit"];

foodElement.innerHTML = favfoods;
let newfood = 'chocolate';
favfoods.push(newfood);
foodElement.innerHTML += `<br>${favfoods}`;




