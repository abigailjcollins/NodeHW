// const xyz = require('./people');
const { people, ages } = require('./people');

console.log(people, ages);
// console.log(xyz.people, xyz.ages);
// console.log(people);

const os = require('os');
// console.log(os);
console.log(os.platform(), os.homedir());