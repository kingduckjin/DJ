// 'use strict';
// 레벨 0 
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
// ━━━━━━━8번━━━━━━━
// const array2 = new Array(5) ;
// let sum = 0;

// for (let i = 0; i < array2.length; i++) {
    //     array2[i] = +prompt(`정수 입력 (${i + 1})`);
    //     sum += array2[i];
    // }
// console.log(sum);
// ━━━━━━━9번━━━━━━━
// const array3 = [20, 10, 5, 52, 64, 34, 75, 16, 85, 50];
// const array4 = [34, 65, 84, 46, 69, 97, 20, 42, 67, 30];
// const result = [];

// // 두개의 배열이 있다. 두 배열이 가진 요소를 이용해서 요소의 합을 담은 배열을 만드는 프로그램을 구현하라.
// // ex) 인덱스 0끼리 더한 값 20 + 34 + 54
// // [54, ...]

// for (let i = 0; i < array3.length; i++) {
//     result[i] = array3[i] + array4[i];
// }
// console.log(result);
// ━━━━━━━10번━━━━━━
// const array5 = ['아이유', 1993, 516, '좋은날', '너랑나', 2008, 918, '팔레트', 161.8, '스트로베리 문', 13,];
// const stringArray = [];
// const numberArray = [];
// /*
//  * 주어진 배열 array에서 문자열과 숫자를 분리하려고 한다.
//  * 문자열이면 stringArray로 넣고 숫자면 numberArray로 넣는 프로그램을 구현하라.
//  * 편의상 결과는 콘솔로 찍는 것으로 한다.
//  */
// console.log(`${array5[0] % 1}`);
// console.log(`${array5[1] % 1}`);

// for (let i = 0,z =0, v= 0; i < array5.length; i++) {

//     if ((array5[i] % array5[i]) === 0) {
//         numberArray[z++] = array5[i];
//     } else {
//         stringArray[v++] = array5[i];
//     }

// }
// console.log(stringArray);
// console.log(numberArray);