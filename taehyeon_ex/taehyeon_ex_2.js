'use strict';

//━━━━━━━━1번━━━━━━━━━

// const array = [undefined, null, undefined, '문자열', 23, undefined, '몇개일까?', 40, 95];
// let count = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === undefined) {
//         count++;
//     }
// }
// console.log(`결과 : ${count}`);

//━━━━━━━━2번━━━━━━━━━

// let input;
//     input = +prompt('ㅎㅎ');

// if (input) {
//         alert('1')
// } else {
//     alert('0')
//     }

//━━━━━━━━3번━━━━━━━━━

// let input;
// input = prompt('입력하셈ㅎ..');

// // if (input * 1) {
// //     alert(`숫자`);
// // } else {
// //     alert('숫자가 아님');
// // }

// if (isNaN(input)) {
//     alert('숫자가 아님');
// } else {
//     alert('숫자');
// }

//━━━━━━━━4번━━━━━━━━━

// let input;
// input = prompt('입력..ㅎ.');

// if ( undefined || null || input) {
//     alert(`${input}`);
// } else {
//     alert('결과값');
// }

//━━━━━━━━5번━━━━━━━━━

// const array = [20, '', null, undefined, '문자열', NaN, '아이유', true, null, undefined, undefined];
// const result = [];

// for (let i = 0,v=0; i < array.length; i++) {
//     if (array[i] == null) {
//         result[v] = array[i];
//         v++;
//     }
// }
// console.log(result);

//━━━━━━━━6번━━━━━━━━━

// let input1, input2, input3;
// input1 = prompt('입력 1');
// input2 = prompt('입력 2');
// input3 = prompt('입력 3');

// if (input1 && input2 && input3) {
//     alert(`${input1} , ${input2} , ${input3}`);
// } else {
//     alert('하나 이상의 입력에 값이 없음')
// }

//━━━━━━━━7번━━━━━━━━━

// let kor, eng, math;
// let average = 0;

// /**
//  * 주어진 세가지 변수에 국어, 영어, 수학 점수를 입력받는다.
//  * 전부 입력되었을 때에만 평균을 계산하는 프로그램을 구현하라.
//  * 도중에 하나라도 입력하지 않으면 프로그램은 종료되도록 구현하라.
//  * 단, 유지보수성은 체크하지 않는다.
//  */

// kor = +prompt('국어점수입력 : ');
// if (kor) {
//     eng = +prompt('영어점수입력 : ');
//     if (eng) {
//         math = +prompt('수학점수입력 : ');
//         if (math) {
//             average = Math.trunc((kor + eng + math) / 3);
//             alert(`결과 : ${kor} + ${eng} + ${math} = ${average}`)
//         }
//     }
// }
// if (!math) {
//     close();
// }

//━━━━━━━━8번━━━━━━━━━

// const array = ['문자열', 20, '사이의', '숫자를', 45, '잘 찾아서', 68, 35, '합해보세요', 80];
// const tmp = [];
// let result = 0;
// console.log(typeof array[0]);

// for (let i = 0, v=0; i < array.length; i++) {
//     if ((typeof array[i]) === 'number') {
//         tmp[v] = array[i];
//         result += array[i];
//         v++;
//     }
// }
// console.log(tmp);
// console.log(result);

//━━━━━━━━9번━━━━━━━━━

// const string = 's';
// const array = ['starwars', 'water', 'wood', 'strong', 'luke', 'darthvader'];
// let result = 0;

// console.log(array[1].indexOf(string));

// for (let i = 0; i < array.length; i++) {
//     if (array[i].includes(string)) {
//         result++;
//     }
// }

// console.log(result);

//━━━━━━━10번━━━━━━━━━

let prevWord, word;

/**
 * 변수 prevWord 이전 단어를 의미한다. word는 현재 단어를 의미한다.
 *
 * 1. 단어는 입력을 받아 저장한다.
 * 2. 이전 단어의 마지막 글자와 현재 단어의 첫 글자를 비교해서 일치하면 성공 아니면 실패.
 * 3. 실패시에는 재입력을 받도록 만든다.
 * 4. 무한루프를 활용한다.
 */

for (; ;) {
    prevWord = prompt('첫 단어');
    if (prevWord) {
        for (; ;) {
            word = prompt(`끝말잇기 단어 이전단어 : ${prevWord}`);
            if (prevWord[prevWord.length - 1] == word[0]) {
                alert('성공');
                prevWord = word;
            } else {
                alert('틀렸어용')
            }
        }
    }
}
