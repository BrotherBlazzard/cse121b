const d = new Date();
const enddate = new Date('06/02/2022');
let diff = (enddate - d) / (1000 * 60 * 60 * 24);

document.querySelector('#year').textContent = d.getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;
document.querySelector('#daysLeft').textContent = diff.toFixed(0);