let intArray = [77,65,90,89,79,95,66,83,87,92, 78];
let stringArray = ['Hawaii, Hawaii', 'Long Island, New York', 'Kodiak Island, Alaska', 'Puerto Rico, Puerto Rico', 'Prince of Wales, Alaska', 'Chichagof Island, Alaska', 'St. Lawerence, Alaska', 'Admiralty, Alaska', 'Oahu, Hawaii'];
let booleanArray = [true, false, true, true, false, false, false, true];

console.log({ intArray });
console.log({ stringArray });
console.log({ booleanArray });

// reduce to a single value
const sum = intArray.reduce((x, y) => x + y, 0);
console.log({ sum });
const average = intArray.reduce((x, y) => x + y, 0) / intArray.length;
console.log({ average });
console.log( `Average toFixed(1): ${average.toFixed(1)}`);

// filter
const hawaiiIslands = stringArray.filter(x => x.includes('Hawaii'));
console.log({ hawaiiIslands });

// map a new array
const nameOnly = stringArray.map((x) => x.substring(0, x.indexOf(',')));
console.log({ nameOnly });
