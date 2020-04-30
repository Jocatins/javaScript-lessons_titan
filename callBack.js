//callbacks & for each

// let titans = ['joca','jenny','sphinx','gypsy','leo'];

// titans.forEach(function(titan){
//     console.log(titan);
// });

//converting to an arrow function
// let titans = ['joca','jenny','sphinx','gypsy','leo'];

// titans.forEach((titan, index)=>{
//     console.log(index, titan);
// });

//call back function
// let titans = ['joca','jenny','sphinx','gypsy','leo'];

// const logTitan = (titan,index) => {
//     console.log(`${index} hello ${titan}`);
// };
// titans.forEach(logTitan);
    
const ul = document.querySelector('.titans');

const titans = ['joca','owes','louis'];

let html = ``;
titans.forEach(function(titan){

    html += `<li style="color": purple">${titan}</li>`;
});
console.log(html);
ul.innerHTML = html;