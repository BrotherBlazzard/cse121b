// OT determination and message
let theDate = new Date();
let dayOfWeek = theDate.getDay();

switch (dayOfWeek) {
  case 0:
    dayOfWeekString = 'Sunday';
    break;
  case 1:
    dayOfWeekString = 'Monday';
    break;
  case 2:
    dayOfWeekString = 'Tuesday';
    break;
  case 3:
    dayOfWeekString = 'Wednesday';
    break;
  case 4:
    dayOfWeekString = 'Thursday';
    break;
  case 5:
    dayOfWeekString = 'Friday';
    break;
  case 6:
    dayOfWeekString = 'Saturday';
    break;
  default:
    dayOfWeekString = `Unknown!: ${dayOfWeek}`;
    break;
}

let theDay = `${theDate.getMonth()}/${theDate.getDate()}`;

if (dayOfWeek === 0 || dayOfWeek === 6 || theDay === '11/25') {
    message1 = `🕰️ Overtime`;
} else {
    message1 = `Today is ${dayOfWeekString}`;
}

document.querySelector('#message1').textContent = message1;


/* FETCH */

let templeList = [];

const output = (temples) => {
    temples.forEach(
        temple => {
            let article = document.createElement('article');

            let templeName = document.createElement('h3');
            templeName.textContent = temple.templeName;

            let location = document.createElement('h4');
            location.textContent = temple.location;

            let dedicated = document.createElement('h4');
            dedicated.textContent = temple.dedicated;

            let pic = document.createElement('picture');
            let img = document.createElement('img');
            img.setAttribute('src', temple.imageUrl);
            img.setAttribute('alt', temple.templeName);
            pic.appendChild(img);

            article.appendChild(templeName);
            article.appendChild(location);
            article.appendChild(dedicated);
            article.appendChild(pic);

            document.querySelector('#temples').appendChild(article);
        }
    );
}



fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json')
    .then(response => response.json())
    .then(temples => {
        templeList = temples;
        output(templeList);
    });


const reset = () => {
    document.querySelector('#temples').innerHTML = '';
}

const sortBy = () => {
    reset();

    let filter = document.querySelector('#sortBy').value;

    switch (filter) {
      case 'asc':
        output(
          templeList.sort((temple1, temple2) => {
            let templeName1 = temple1.templeName.toLowerCase();
            let templeName2 = temple2.templeName.toLowerCase();
            if (templeName1 < templeName2) return -1;
            else if (templeName1 > templeName2) return 1;
            else return 0;
          })
        );
        break;
      case 'dsc':
        output(
          templeList.sort((temple1, temple2) => {
            let templeName1 = temple1.templeName.toLowerCase();
            let templeName2 = temple2.templeName.toLowerCase();
            if (templeName1 > templeName2) return -1;
            else if (templeName1 < templeName2) return 1;
            else return 0;
          })
        );
        break;
      case '2000':
          output(templeList.filter(temple => temple.dedicated.substr(temple.dedicated.length - 4, 4) < filter));
        break;
      default:
        // using ternary operators
        output(
          templeList.sort((temple1, temple2) =>
            temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase()
              ? 1
              : temple2.templeName.toLowerCase() >
                temple1.templeName.toLowerCase()
              ? -1
              : 0
          )
        );
        break;
    }
}


document.querySelector('#sortBy').addEventListener('change', sortBy);