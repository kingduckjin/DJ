// ━━━━━━━━1번━━━━━━━━

// let num1 = 20, num2 = 24;

// function sum(n1, n2) {
//     return n1 + n2;
// }
// console.log(sum(12, 4));

// ━━━━━━━━2번━━━━━━━━

// function tot(n1, n2) {
//     let sum = 0;
//     for (let i = n1; i <= n2; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }

// tot(3, 7);

// ━━━━━━━━3번━━━━━━━━

// function tot(...array) {
//     let v = '';

//     for (let i = 0; i < array.length; i++) {
//         v += array[i];
//     }

//     return v;
// }

// console.log(tot('나는 생각한다. ', '고로 존재한다.', '데카르트'));

// ━━━━━━━━4번━━━━━━━━

// // /*
// //  * 숫자들을 매개변수로 받는 함수를 구현하려고 한다.
// // 두 개의 매개변수만을 실제로 사용하고, 넘치는 매개변수들은 따로 저장을 하려고 한다.
// //  * 이 때 두개의 매개변수는 더해서 합을 출력하고
// //  * 사용하지 않은 나머지의 매개변수들은 배열의 형태로 리턴하는 함수를 구현하라.
// //  */

// function sum(n1,n2,...n3) {
//     console.log(n1 + n2);
//     return n3;
// }



// console.log(sum(10, 20, 30, 40, 50));


// ━━━━━━━━5번━━━━━━━━

// /*
//  * 전달받는 인수의 제한이 없는 함수를 만들려고 한다.
//  * 이 때 모든 인수를 배열의 형태로 묶어 리턴하는 함수를 구현하라.
//  */


// function array(...n1) {
//     return n1;
// }

// console.log(array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(array(1, 2, 3, 4, 5));

// ━━━━━━━━6번━━━━━━━━

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];
// const array3 = [11, 12, 13, 14, 15];

// /**
//  * 주어진 배열 array1, array2, array3을 arrayTo2DArray 함수에 인수로 전달하고
//  * 2차원 배열의 형태로 리턴하는 로직을 완성하라.
//  */

// function arrayTo2DArray(...n1) {
//     return console.log(n1);
// }
// arrayTo2DArray(array1, array2, array3);


// ━━━━━━━━7번━━━━━━━━


// /**
//  * string 변수에 문자열을 입력받거나 취소를 눌렀을 때의 상황에 따라 결과가 달라지는 함수를 구현하라.
//  * 문자열을 입력 받으면 입력받은 문자열을 알림창으로 띄운다.
//  * 취소를 눌렀다면 취소라는 문자열을 알림참으로 띄운다.
//  * 단, 이 함수는 콜백 함수 호출을 적용해야한다.
//  */
// const string = prompt('입력 혹은 취소');

// function okFunc() {
//     alert(`${string}`);
// }
// function cancelFunc() {
//     alert('취소');
// }

// function okOrCancel(okFunc,cancelFunc) {
//     if (string ?? null) {
//         okFunc();
//     } else {
//         cancelFunc();
//     }
// }

// okOrCancel(okFunc, cancelFunc);

// ━━━━━━━━8번━━━━━━━━

// function multi(n1, n2) {
//     return n1 * n2;
// }
// console.log(multi(2, 4))

// multi = (n1, n2) => n1 * n2;
// console.log(multi(3, 4));

// ━━━━━━━━9번━━━━━━━━

// /**
//  * 더하기, 빼기, 곱하기, 나누기, 나머지값 계산. 총 다섯가지의 기능을 가진 계산기를 함수로 만들려고 한다.
//  * 하나의 기능은 하나의 호출로만 수행할 수 있으며 콜백 함수를 이용해야한다.
//  */

// function calculator(n1,n2,n3){
//     return (n3(n1, n2));
// }

// console.log(calculator(10, 20, (number1, number2) => number1 + number2));
// console.log(calculator(10, 20, (number1, number2) => number1 - number2));
// console.log(calculator(10, 20, (number1, number2) => number1 * number2));
// console.log(calculator(10, 20, (number1, number2) => number1 / number2));
// console.log(calculator(10, 20, (number1, number2) => number1 % number2));

