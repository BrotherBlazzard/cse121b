let d = new Date();
const choreWeek = document.querySelector('#choreList');
const personFilter = document.querySelector('#sortBy');
let choreList = {
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

const reset = () => {
  document.querySelector('#choreList').innerHTML = ' ';
};

const sortBy = () => {
  reset();
  let job = [];
  const x = d.getDate();
  switch (document.querySelector('#sortBy').value) {

    case 'Meredith':
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          job = choreList.bathrooms;
          break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
          job = choreList.firstFloor;
          break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
          job = choreList.kitchenLaundry;
          break;
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
          job = choreList.basementFloor;
          break;
      }
      break;

    case 'Genevieve':
      if (x > 0 && x <= 7) {
        job = choreList.firstFloor;
      } else if (x > 7 && x <= 14) {
        job = choreList.kitchenLaundry;
      } else if (x > 14 && x <= 21) {
        job = choreList.basementFloor;
      } else {
        job = choreList.bathrooms;
      }
      break;
  }
  buildJobList(job);
};

function buildJobList(job) {
  document.querySelector('#name').innerHTML =
    document.querySelector('#sortBy').value;

  job.forEach((chore) => {
    li = document.createElement('li');
    li.textContent = chore;
    choreWeek.appendChild(li);
  });
}

personFilter.addEventListener('change', sortBy);
