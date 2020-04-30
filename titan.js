// primitive values

let firstScore = 70;
let secondScore = firstScore;

console.log(`scoreOne: ${firstScore}`, `scoreTwo: ${secondScore}`);

firstScore = 90;
console.log(`scoreOne: ${firstScore}`, `scoreTwo: ${secondScore}`);

//reference values

const userOne = {name: 'titan', age: 56};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 50;
console.log(userOne, userTwo);