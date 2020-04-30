//object literals
let user = {
    name: 'titan',
    age: 28,
    email: 'titan@gypsy.com',
    location: 'space',
    blogs: ['why i want to be a titan', '10 things i love ']
};

console.log(user);
user.name = 'gypsy';

//dot notation
console.log(user.name);
//square bracket notation
console.log(user['name']);
user['name'] = 'jen';
console.log(user['name']);
//square bracket notation useful when passing a variable

const key = 'location';
console.log(user[key]);

console.log(typeof user);
