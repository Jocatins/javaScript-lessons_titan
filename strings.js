//string
console.log('hello joca');

let email = 'titan@titanspace.com';
console.log(email);

//string concat
let firstName = 'titan';
let lastName = 'nicholas';
let fullName = firstName + ' ' + lastName;

console.log(fullName);

//getting single characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods

console.log(fullName.toUpperCase());

// let result = fullName.toLowerCase();
// console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

let titan = email.lastIndexOf('n');
console.log(titan);

let gypsy = email.slice(0,9);
console.log(gypsy);

let joca = email.substr(4,10);
console.log(joca);

//let result = email.replace('t','p');

