// const hamburger = 5,
//       fries = 0;

// if (hamburger && fries) {
//   console.log('Я сыт!');
// } else {
//   console.log('Я не сыт!');
// }

// console.log((hamburger && fries));

// const hamburger = 3,
//       fries = 1,
//       cola = 0;


//     console.log(hamburger === 3 && cola && fries);

//     console.log(1 && 0);
//     console.log(1 && 5);
//     console.log(null && 5);
//     console.log(0 && 'dsgdfgdfgd');

// if (hamburger === 3 && cola === 1 && fries === 1) {
//   console.log('Все сыты!');
// } else {
//   console.log('Мы уходим!');
// }


// const hamburger = 0,
//       fries = null,
//       cola = 0;


// if (hamburger || cola || fries) {
//   console.log('Все довольны!');
// } else {
//   console.log('Мы уходим!');
// }

// console.log((hamburger || cola || fries));


const hamburger = 3,
      fries = 3,
      cola = 0,
      nuggets = 2;


if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
  console.log('Все довольны!');
} else {
  console.log('Мы уходим!');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);







let johnReport,
    alexReport,
    samReport,
    mariaReport = 'done';


console.log(johnReport || alexReport || samReport || mariaReport);


console.log(!1);


// Доп задание 

console.log( NaN || 2 || undefined );  // 2
 
console.log( NaN && 2 && undefined );  // NaN
 
console.log( 1 && 2 && 3 );  // 3
 
console.log( !1 && 2 || !3 );  // false
 
console.log( 25 || null && !3 );  // 25
 
console.log( NaN || null || !3 || undefined || 5);  // 5
 
console.log( NaN || null && !3 && undefined || 5);  // 5
 
console.log( 5 === 5 && 3 > 1 || 5);  // true


