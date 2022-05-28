let currentDay = new Date().getDay();
console.log(currentDay);

if (currentDay > 0 && currentDay < 6) {
  greeting = 'Hang in there!';
} else {
  greeting = 'Woohoo! It is the weekend!';
}



switch (currentDay) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
}



document.querySelector('#message1').innerHTML = greeting;
document.querySelector('#message2').innerHTML = day;


/* FETCH */

let templeList = [];
const output = (temples) => {
  temples.forEach((temple) => {
    let article = document.createElement('article');
    let templeName = document.createElement('h3');
    templeName.innerHTML = temple.templeName;
    let location = document.createElement('h4');
    location.innerHTML = temple.location;
    let dedicated = document.createElement('h4');
    dedicated.innerHTML = temple.dedicated;
    let imageUrl = document.createElement('img');
    imageUrl.setAttribute('src', temple.imageUrl);
    imageUrl.setAttribute('alt', temple.templeName);

    article.appendChild(templeName);
    article.appendChild(location);
    article.appendChild(dedicated);
    article.appendChild(imageUrl);

    document.querySelector('#temples').appendChild(article);
  });
};

const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';


async function getTemples(url) {
  const promise = await fetch(url);
  if (promise.ok) {
    templeList = await promise.json();
    output(templeList);
  }
}

const reset = () => {
  document.querySelector('#temples').innerHTML = '';
};

const sortBy = () => {
  reset();
  let order = document.querySelector('#sortBy').value;

  if (order === 'desc') {
    templeList.sort().reverse();
  } else {
    templeList.sort((temple1, temple2) => {
      let templeName1 = temple1.templeName.toLowerCase();
      let templeName2 = temple2.templeName.toLowerCase();
      if (templeName1 < templeName2) return -1;
      else if (templeName1 > templeName2) return 1;
      else return 0;
    });
  }
  output(templeList);
};

getTemples(url);
document.querySelector('#sortBy').addEventListener('change', sortBy);