//if statements
// const page = 45;

// if(page > 40){
//     console.log('you have nice ideas');
// }
// const titans = ['p','o','i'];
// if(titans.length > 2){
//     console.log('great titans');
// }

// const password = 'password';

// if(password.length >= 10){
//     console.log('it is a nice password');
// }else{
//     console.log('improve your password');
// }

// const password = 'spontaneous';

// if(password <= 10){
//     console.log('password is weak');
// }else if(password.length <= 8){
//     console.log('weaker password');
// }else{
//     console.log('strong password');
// } 

//logical operators - OR || and AND &&
// const password = 'spont@neous';

// if(password >= 11 && password.includes('@')){
//     console.log('password is weak');
// }else if(password.length <= 8){
//     console.log('weaker password');
// }else{
//     console.log('strong password');
// } 

//break and continue

// const scores = [34,23,23,23,11,87,100,90,87,98];
// for(let p = 0; p < scores.length; p ++){

//     if(scores[p] === 11){
//         continue;
//     }
//     console.log('game scores are: ', scores[p]);

//     if(scores[p] === 100){
//         console.log('you are a winner');
//         break;
//     }
// }

//switch statements
// const grade = 'D';

// switch(grade){
//     case 'A':
//         console.log('You got A!');
//         break;
//     case 'B':
//         console.log('You got B!');
//         break;
//     case 'C':
//         console.log('You got C!');
//         break;
//     case 'D':
//         console.log('You got D!');
//         break;
//     case 'E':
//         console.log('You got E!');
//         break;
//     default:
//         console.log('you banged');
// }
//variable & block scope
let age = 90;
if(true){
    let age = 92;
    console.log('age inside the 1st code block: ', age);
}
console.log('age outside the code block ', age);
