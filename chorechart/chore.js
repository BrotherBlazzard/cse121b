// Date work section
let d = new Date();
let currentDay = d.getDay();
let currentHour = d.getHours();
let currentMinute = d.getMinutes();

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
if (currentHour > 12) {
  currentHour = currentHour - 12;
}
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}

document.querySelector('#day').innerHTML = day;
document.querySelector('#hours').innerHTML = currentHour;
document.querySelector('#minutes').innerHTML = currentMinute;


const choreWeek = document.querySelector('#choreList');

//Chorelists
let Chorelists = {
  bathrooms: [
    'sinks',
    'mirrors',
    'toilets',
    'tubs',
    'sweep floors',
    'mop floors',
  ],
  firstFloor: [
    'dust furniture and blinds',
    'mirrors',
    'vacuum all rooms',
    'vacuum couch',
    'mop rooms',
  ],
  kitchenLaundry: [
    'clean microwave',
    'prepare recycling',
    'mop kitchen floor',
    'separate laundry',
    'wash your bed sheets',
    'wash towels',
  ],
  basementFloor: [
    'dust furniture and blinds',
    'sweep steps',
    'vacuum all floors',
    'mop all floors',
    'mirrors',
  ],
};

//Chore Assignments

const reset = () => {
  document.querySelector('#choreList').innerHTML = ' ';
};

const sortBy = () => {
  reset();
  let job = [];
  switch (document.querySelector('#sortBy').value) {
    case 'Meredith':
      switch (d.getDate()) {
        case 1, 2, 3, 4, 5, 6, 7:
          job = Chorelists.bathrooms;
          break;
        case 8, 9, 10, 11, 12, 13, 14:
          job = Chorelists.firstFloor;
          break;
        case 15, 16, 17, 18, 19, 20, 21:
          job = Chorelists.kitchenLaundry;
          break;
        case 22, 23, 24, 25, 26, 27, 28, 29, 30, 31:
          job = Chorelists.basementFloor;
          break;
      }
      break;
    case 'g':
      switch (d.getDate()) {
        case d > 0 && d <= 7:
          job = 'firstFloor';
          break;
        case d >= 8 && d <= 14:
          job = "kitchenLaundry";
          break;
        case d >= 15 && d <= 21:
          job = "basementFloor";
          break;
        case d >= 22 && d <= 31:
          job = "bathrooms";
          break;
      }
      break;
    case 'g':
      switch (d.getDate()) {
        case d > 0 && d <= 7:
          job = 'kitchenLaundry';
          break;
        case d >= 8 && d <= 14:
          job = "basemetnFloor";
          break;
        case d >= 15 && d <= 21:
          job = "bathrooms";
          break;
        case d >= 22 && d <= 31:
          job = "firstFloor";
          break;
      }
      break;
    case 'g':
      switch (d.getDate()) {
        case d > 0 && d <= 7:
          job = 'bathrooms';
          break;
        case d >= 8 && d <= 14:
          job = "firstFloor";
          break;
        case d >= 15 && d <= 21:
          job = "kitchenLaundry";
          break;
        case d >= 22 && d <= 31:
          job = "basementFloor";
          break;
      }
      break;

  }
  buildJobList(job);
};




function buildJobList(job) {
  document.querySelector('#name').innerHTML = document.querySelector('#sortBy').value;

  job.forEach((chore) => {
    li = document.createElement('li');
    li.textContent = chore;
    choreWeek.appendChild(li);
  });
}


document.querySelector('#sortBy').addEventListener('change', sortBy);