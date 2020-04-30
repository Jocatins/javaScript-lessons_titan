// template strings

const title = 'Best titans of 2020';
const author = 'joca';
const views = '669';

//concatenation way
// let result = 'the media accused ' + title  + ' by ' + author + ' because of its number of ' + views + ' views '
// console.log(result);

//template string way
let result = `the book called ${title} by ${author} has ${views} views`;
console.log(result);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span> this book has ${views} views</span>
`;
console.log(html);