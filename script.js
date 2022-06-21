// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// console.log( NaN || 2 || undefined ); //2
// console.log( NaN && 2 && undefined ); //NaN
// console.log( 1 && 2 && 3 ); //3
// console.log( !1 && 2 || !3 ); //false
// console.log( 25 || null && !3 ); //25
// console.log( NaN || null || !3 || undefined || 5); //5
// console.log( NaN || null && !3 && undefined || 5); //5
// console.log( 5 === 5 && 3 > 1 || 5); //true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
//
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// } //Done!


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
//
// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!')
// } //Done!
//
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
//
// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// } else {
//     console.log('!Done')
// }

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// ВЛОЖЕННЫЕ ЦИКЛЫ

// let result = '';
// const length = 10;
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*'
//     }
//     result += '\n'
// }
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`)
//         }
//     }
// }
//
//
// function firstTask() {
//     for (let i = 5; i < 11; i++) {
//         console.log(i)
//     }
// }
// firstTask();
// // Место для второй задачи
// function secondTask() {
//     for (let i = 20; i >= 10; i--) {
//         if (i === 13) break;
//         console.log(i)
//     }
// }
// secondTask()
// // Место для третьей задачи
// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }
// thirdTask()
// // Место для четвертой задачи
//
// // Цикл, который нужно переписать:
//
// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }
//
// function fourthTask() {
//     let h = 2;
//     while(h <= 16) {
//         if (h % 2 === 0) {
//             h++;
//             continue;
//         } else {
//             console.log(h)
//         }
//         h++
//     }
// }
// fourthTask();
// // Место для пятой задачи
// function fifthTask() {
//     const arrayOfNumbers = [];
//     // Пишем решение вот тут
//     for (let i = 5; i < 10; i++) {
//         arrayOfNumbers.push(i)
//     }
//
// // Не трогаем
//     return arrayOfNumbers;
// }
//
// console.log(fifthTask());

// ВЛОЖЕННЫЕ ЦИКЛЫ
