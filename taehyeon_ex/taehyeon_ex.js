// 'use strict';

// // ━━━━━━━1번━━━━━━━
// let total = 0;
// for (let i = 0; i <= 20; i++) {
//     total += i;
// }
// console.log(total);
// // ━━━━━━━2번━━━━━━━
// let num1, num2, sum1;
// // num1 = +prompt('정수 1');
// num1 = 5;     //임의정수
// // num2 = +prompt('정수 2');
// num2 = 4;     //임의정수
// sum1 = num1 + num2;
// console.log(sum1);
// // ━━━━━━━3번━━━━━━━
// let num3, num4, sum2
// num3 = +prompt('정수 1');
// num4 = +prompt('정수 2');
// sum2 = num3 + num4;
// if (sum > 20) {
//     alert('두 수의 합이 20보다 커용');
// } else {
//     alert('두 수으 합이 20보다 작아용');
// }
// // ━━━━━━━4번━━━━━━━
// let total2=0;
// for (let i = 0; i < 100; i++) {
//     if (i % 3 == 0) {
//         total2 += i;
//     }
// }
// console.log(total2);
// // ━━━━━━━5번━━━━━━━
// let num5, num6, num7, average = 0;
// for (; ;){
//     num5 = +prompt('정수 1');
//     if (num5 > 0) {
//         num6 = +prompt('정수 2');
//         if (num6 > 0) {
//             num7 = +prompt('정수 3');
//             if (num7 > 0) {
//                 break;
//             }
//         }
//     }
// }
// average = (num5 + num6 + num7)/3;
// alert(`평균은 ${average}`);
// ━━━━━━━6번━━━━━━━
// const array = [];

// for (let i = 0; i <= 10; i++) {
//     array[i] = i;
// }
// console.log(array);
// ━━━━━━━7번━━━━━━━
// const numlist = [10, 25, 48, 98, 57];
// let min = 98, max = 10;

// for (let i = 0; i < numlist.length; i++) {
//     if (min > numlist[i]) min = numlist[i];
//     if (max < numlist[i]) max = numlist[i];
// }   
// console.log(min);
// console.log(max);