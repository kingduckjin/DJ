'use strict';

//━━━━━━━━문제 1번━━━━━━━━

// let Q1string1 = 'https://www.naver.com/';
// let Q1string2 = '0123456789012345678901';
// let Q1step1, Q1step2, Q1step3;
// Q1step1 = Q1string1;
// console.log(Q1step1);
// Q1step2 = Q1step1.substring(8);
// console.log(Q1step2);
// Q1step3 = Q1step2.split('.')
// console.log(Q1step3);

//━━━━━━━━문제 2번━━━━━━━━

// let Q2string = '               123   4    56    7 9   0  ';
// let Q2step1, Q2step2;
// Q2step1 = Q2string.trim();
// console.log(Q2step1);

// Q2step2 = Q2step1.replace(' ', '');

// for (; ;){
//     Q2step2 = Q2step2.replace(' ', '');
//     if (Q2step2 === Q2step2.replace(' ', '')) {
//         break;
//     }
// }
// console.log(Q2step2);

//━━━━━━━━문제 3번━━━━━━━━

// let Q3string = 'asdasdasdasdasdasdasdasd';

// for (; ;){
//     Q3string = Q3string.replace('a', 'A')
//     if (Q3string === Q3string.replace('a', 'A')) {
//         break;
//     }
// }

// console.log(Q3string);

//━━━━━━━━문제 4번━━━━━━━━

// const Q2string2 = [ 1, 0, 1, 1, 1, 3, 5, ];

// for (let i = Q2string2.length -1, v = 0 ; i >= 0; i--) {
//     Q2string2[v] = Q2string2[i];
//     v++;
// }
// console.log(Q2string2);

//━━━━━━━━문제 5번━━━━━━━━

// const Q2string3 = [1, 2, 3, 4, 5,];
// let n1 = 0, n2 = 0;

// for (let i = 0; i < Q2string3.length; i++) {
//     if ((Q2string3[i] % 2) == 0) {
//         n1++;
//     } else {
//         n2++;
//     }
// }
// const dj = [ n1, n2 ];
// console.log(dj);

//━━━━━━━━문제 6번━━━━━━━━

// .join(): 리스트 요소를 콤마를 포함한 전체를 하나의 문자열로 만들어줌
// .join(''): 리스트 요소를 콤마를 빼고 하나의 문자열로 만들어줌
// .join('구분 기호'): 리스트 요소를 구분 기호를 넣어 하나의 문자열로 만들어줌
const Q2box = [ 6, 66, 16, 62, 64, 26, 60, ];
Q2box[0] = Q2box.join('');


for (; ;) {
    Q2box.indexOf('6')
    
}

console.log(Q2box[0].indexOf('6'));

//━━━━━━━━문제 7번━━━━━━━━

//━━━━━━━━문제 8번━━━━━━━━

//━━━━━━━━문제 9번━━━━━━━━

//━━━━━━━━문제 10번━━━━━━━━