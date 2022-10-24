'use strict';

// function sum(n1, n2) {
//     return n1 + n2;
// }

// console.log(sum(5, 3));

// function test1(a, b) {
//     console.log(b);
//     console.log(a + b);
//     console.log();
// }
// // test1(5, 3);
// // test1(5);

// // console.log(5 + undefined);

// test1(7, 5, 4);

// function test2(n1, n2) {
//     return n1 + n2;
// }
// console.log(test2(10, 15));

// function test3() {
//     // return undefined;
// }

// function test4() {
//     console.log('passed func');
// }

// function test5(func) {
//     func();
// }

// test5(test4);

function div(a, b) {
    if (isNaN(a + b)){
        console.log('입력값이 숫자가 아님')
    } else {
        console.log(a + '/' + b + "=" + (a / b));
    }
}
div('9', '4');
div('a', 4);

// arugments : 전달된 인수값들을 배열 형태로 내부에 저장하는 객체로써 실제 배열은 아니므로 배열에 적용되는 메서드 속성의 사용은 불가.