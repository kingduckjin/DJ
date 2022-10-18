'use strict';

const str1 = '  dojin Want GO home.. \n';
const str2 = 'dojin hATe COde...    '; 

// console.log(str1.trim());
// // >dojin want go home..
// console.log(str1.trimStart() + str2);
// // >dojin want go home..
// //  dojin hate code...

// console.log(str1.trimEnd() + str2);
// // >   dojin want go home..dojin hate code

// console.log(str1.toLowerCase());
// // >  dojin want go home..

// console.log(str1.toUpperCase());
// // > DOJIN WANT GO HOME..\n

// console.log(str1.trim().toUpperCase());
// console.log(str2.repeat(3));
// console.log(str2.trim().repeat(3));

const str3 = '01234567890123456'
const str4 = 'dojin be will die'

// console.log(str4.substring(0, 5));
// //>dojin
// console.log(str4.substring(4, 11));
// //>n be wi
// console.log(str4.substring(7));
// //>e will die
// console.log(str4.substring(1, -1))
// 시작 인덱스부터 종료 인덱스 전까지의 새로운 부문 문자열 반환.
// 종료인덱스를 생략하면 시작인덱스부터 문자열 끝까지 추출.
// 시작인덱스가 종료인덱스보다 클 경우 내부적으로 치환

// console.log(str4.slice(3, -1));
// // >in be will di
// console.log(str4.slice(3, 1));
// // ''빈문자열 반환
// console.log(str4.slice(-6));
// //>ll die

const str5 = '0123456789012345678'
const str6 = 'dojin is very angry'
// searchString/includes

// console.log(str6.startsWith('dojin'));
// // > true
// console.log(str6.startsWith('is'));
// // > false
// console.log(str6.endsWith('angry'));
// //>true
// console.log(str6.endsWith('ry'));
// //>true
// console.log(str6.endsWith('very'));
// //>false

// console.log(str6.includes('do'));
// //>true
// console.log(str6.includes('sexy'));
//>false

// console.log(str6);
// //dojin is very angry
// console.log(str6.charAt(1));
// //o

// console.log(str6[4]);
// //n
// console.log(str6.charAt(4));
// //n
// console.log(str6[20]);
// //undefined
// console.log(str6.charAt(20));
// //''빈문자열

// for (const dj of str6) {
//     console.log(dj);
// }
const str7 = '0123456789012345678901'
const str8 = 'dj always want go home'

// console.log(str8.indexOf('j'));
// //>1

// console.log(str8.indexOf(' '));
// console.log(str8.lastIndexOf(' '));
// //2
// //17

// console.log(str8.indexOf('dojin'));
// //> -1 반환

// console.log(str8.lastIndexOf('o'));
// console.log(str8.indexOf('o'));
// //>19

// for (let ix = 0,findix; ; ) {
//     findix = str8.indexOf('o', ix);
//     if (findix == -1) break;

//     console.log(findix);
//     ix = findix + 1;
// }

// for (let ix = -1; (ix = str8.indexOf('o', ix + 1)) != -1;)console.log(ix);


