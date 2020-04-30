//function declaration
// function gypsy(time){
//     console.log(`good ${time}`);
// }
// gypsy('night');

// //function expression

// const say = function(name){
//     console.log(`good day ${name}`);
// };
// say('joca');


//returning values

// const calcArea = function(radius){
//     return 3.14 * radius **2;
    
// };
// const area = calcArea(6);
// console.log(area);

//arrow function

// const calcArea = (radius) =>{
//     return 3.14 * radius **2;
// };
// const area = calcArea(6);
// console.log('the value of area is ', area);

// //arrow function 2 (works when there is only one param)
// const calcArea = radius => 3.14 * radius **2;

// const area = calcArea(6);
// console.log('the value of area is ', area);

//turning regular functions to arrow functions

// const greet = function (){
//     return 'hello titan';
// };
// const greeting = () =>  'hello titans';
// const test = greeting();
// console.log(test);


// const price = function(products, service){
//     let total = 0;
//     for(let i = 0; i < products.length; i ++){
//         total += products[i] + products[i] * service;
//     }
//     return total;
// }
// arrow function
const bill = (products,tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i ++){
        total += products[i] + products[i] * tax;
        return total;
    }
};
console.log(bill([10,20,30], 0.5));

