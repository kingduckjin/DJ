'use strict';
//자바스크립트 레벨1
//━━━━━━━━━1번━━━━━━━━━

// /**
//  * 1. string 변수에 특정 사이트의 URL(문자열)을 할당하라.
//  * ex) https://www.naver.com/
//  *
//  * 2. string 변수에서 http:// 나 https:// 를 제거한채로 step1 변수에 저장하라.
//  * ex) www.naver.com/
//  *
//  * 3. step1 변수의 문자열에서 '.'을 기준으로 문자열을 잘라 배열 형태로 출력하라.
//  * ex) ['www', 'naver', 'com/']
//  */

// let string = 'http://www.naver.com/'
// let step1, step2 , step3;

// step1 = string;
// console.log(step1);

// // step2 = string.replace('http://', '')
// step2 = step1.split('//')[1];
// console.log(step2);

// step3 = step2.split('.');
// console.log(step3);

//━━━━━━━━━2번━━━━━━━━━

// let string = '               123   4    56    7 9   0  ';
// let step1, step2;
// /*
//  * 1. 주어진 문자열에서 양 옆 공백을 지운채로 step1 변수에 저장하라.
//  * 2. 해당 문자열에서 모든 공백을 지워서 step2 변수에 저장하라.
//  */
// step1 = string.trim();
// console.log(step1);

// step2 = step1.replace(' ', '');
// console.log(step2);

// for (; ;){
//     step2 = step2.replace(' ', '');
//     if (step2.indexOf(' ') == -1) {
//         break;
//     }
// }

// console.log(step2);

//━━━━━━━━━3번━━━━━━━━━

// let string = 'asdasdasdasdasdasdasdasd';

// for (; ;){
//     string = string.replace('a', 'A');
//     if (string.indexOf('a') == -1) {
//         break;
//     }
// }
// console.log(string)

//━━━━━━━━━4번━━━━━━━━━

// const numlist = [1, 0, 1, 1, 1, 3, 5,];

// for (let i = numlist.length -1, v=0; i>=0  ; i--) {
//     numlist[v] = numlist[i];
//     v++;
// }
// console.log(numlist);

//━━━━━━━━━5번━━━━━━━━━

// const numList = [1, 2, 3, 4, 5,];
// let odd = 0, even = 0;

// for (let i = 0; i < numList.length; i++) {
//     if (numList[i] % 2 == 0) {
//         even++;
//     } else {
//         odd++;
//     }
// }
// const num = [even , odd];
// console.log(num);


//━━━━━━━━━6번━━━━━━━━━

// const box = [6, 66, 16, 62, 64, 26, 60,];
// const joinBox = box.join('');
// let v = 0;

// for (let i = 0; i < joinBox.length; i++) {
//     if (joinBox[i] === '6') {
//         v++;
//     }
// }
// console.log(v);

//━━━━━━━━━7번━━━━━━━━━

// const array = ['아이유', 1993, 516, '좋은날', '너랑나', 2008, 918, '팔레트', 161.8, '스트로베리 문', 13,];

// let v = 0, z = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] * 1) {
//         v++;
//     } else {
//         z++;
//     }
// }

// console.log(`숫자 : ${v}개`);
// console.log(`문자 : ${z}개`);

//━━━━━━━━━8번━━━━━━━━━

// /*
//  * 주어진 문자열 배열을 매개변수에 전달하고 각 문자열 요소의 길이를 담은 배열을 반환하는 함수를 작성하라.
//  */
// const arr = ['We', 'are', 'the', 'world!',];

// function lengtH(dojin) {
//     const v = new Array();
//     for (let i = 0; i < dojin.length; i++) {
//         v[i] = dojin[i].length;
//     }
//     console.log(v);
// }
// lengtH(arr);

//━━━━━━━━━9번━━━━━━━━━

/*
 * 주어진 숫자 number와 숫자 배열 numArray를 매개변수에 전달하고
 * numArray에서 number의 배수를 찾아 반환하는 함수를 작성하라.
 */
// const numArray = [4, 5, 6, 7, 8, 9, 10, 11, 12,];
// const number = 3;

// function Fc(dojin) {
//     const dj = new Array();
//     for (let i = 0, count = 0; i < dojin.length; i++) {
//         if (dojin[i] % number == 0) {
//             dj[count] = dojin[i];
//             count++;
//         }
//     }
//     console.log(dj);
//     console.log(dj.length);
// }

// Fc(numArray);

//━━━━━━━━━10번━━━━━━━━━
// /*
//  * 주어진 문자열을 매개변수로 전달하고 그 문자열에서 숫자를 걸러낸 후, 그 숫자들의 합을 구하는 함수를 작성하라.
//  */
// const string = 'aAb1B2cC34oOp';
// console.log(string);

// function Fc(array) {
//     let v = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] * 1) {
//             v += array[i]*1;
//         }
//     }
//     console.log(v);
// }

// Fc(string);
