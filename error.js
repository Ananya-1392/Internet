//throw expression;

//throw 42;
//throw ball;
// throw{
//     head: 'Tall'
// }


// try...catch...finally

// let divide = (a,b) => {
//     try{
//         if(b == 0){
//             throw "Division by 0"
//         } else{
//             return a / b;
//         }
//     }
//     catch(e){
//         console.log(e);
//         console.log("Why are you dividing by 0?")

//     }
// }

// let sum = (a, b, c) => {
//     let div = divide (a,b);
//     return div + c;
// }

//console.log(sum(1, 0, 2))

//compute area only when length and width are +ve integers
// let area = (length, width) => {
//     try{
//         if(length < 0 || width < 0 ){
//             throw "Negative values"
//         } else{
//             return length * width;
//         }
//     } catch(e){
//         alert(e);
//     }
// }

// console.log(area(-4, 9))

// function sumArray (number){
//     try{
//         if(number.length == 0){
//             throw "array is empty"
//         } else{
//             let sum = 0;
//             for(let i=0; i<number.length; i++){
//                 sum += number[i];
//             }
//             return sum;
//         }
//     } catch(e){
//         alert(e);
//     }
    
// }

// const number = [1, 2, 3, 4, 5];
// console.log(sumArray(number));

