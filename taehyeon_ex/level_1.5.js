'use strict';

//객체//

//━━━━━━━━━━━━문제1번━━━━━━━━━━━━

// const person = {};

// person.name = '안도진';
// person.age = 30;

// console.log(`이름: ${person.name} 나이: ${person.age}`);

//━━━━━━━━━━━━문제2번━━━━━━━━━━━━

// const person = {};
// /*
//  * 위의 비어있는 person 객체를 건드리지 않고 이 주석 아래에서 프로퍼티를 추가하고 출력하라.
//  * 프로퍼티를 추가할 때에는 반복문을 사용하며 총 5개의 프로퍼티를 원하는 이름으로 입력받아 추가한다.
//  * 참고로 프로퍼티는 키와 밸류가 세트이다. (총 10번의 입력을 받아야한다는 소리.)
//  */
// let key, value;

// for (let i = 0; i < 5; i++) {
//     key = prompt('key입력 : ');
//     value = prompt('value입력 : ');
//     person[key] = value;
// }

// for (let key in person) {
//     document.write(`${key}의 값: ${person[key]}`);
// }

//━━━━━━━━━━━━문제3번━━━━━━━━━━━━

// /*
//  * 위의 객체에서 num1과 num2를 더하는 기능과 곱하는 기능을 추가하려고 한다.
//  * 각각의 기능을 메소드로 추가하라.
//  * 단, 더하는 기능은 객체 내에서 직접 추가를 하고 곱하는 기능은 객체 밖에서 함수 정의를 한 후 프로퍼티에 함수의 참조를 할당하라.
//  * 그 후 만든 메소드를 호출해서 결과를 console.log로 출력하라.
//  */
// const calculator = {
//     num1: 5,
//     num2: 10,
//     sum() {
//         return this.num1 + this.num2;
//     },
//     multiply,
// };

// function multiply() {
//     return this.num1 * this.num2;
// }

// console.log(calculator.sum());
// console.log(calculator.multiply());

//━━━━━━━━━━━━문제4번━━━━━━━━━━━━
/**
 * 단어장을 출력하려고 한다. 하지만 아래의 객체는 아직 완성되지 않았다.
 * updateWord 메소드와 printWordNote 메소드가 필요하다.
 * 단어장의 빈 부분을 완성하는 updateWord 메소드는 객체의 외부에서 정의하고 '참조'를 통해서 객체에 정의한다.
 * printWordNote 메소드는 객체의 내부에서 정의한다.
 *
 * null인 부분은 실제 출력했을 때에는 '안배움' 문자열로 나타나야한다.
 * 또한 실제 실행 구문은 아래의 4 구문으로 제한한다.
 *
 * wordNote.printWordNote();
 * console.log();
 *
 * wordNote.updateWord();
 * wordNote.printWordNote();
 */

const wordNote = {
    father: '아빠',
    mother: '엄마',
    son: '아들',
    brother: null,
    sister: null,
    printWordNote() {
        console.log(`father : ${this.father}`)
        console.log(`mother : ${this.mother}`)
        console.log(`son : ${this.son}`)
        console.log(`brother : ${this.brother || '없음'}`)
        console.log(`sister : ${this.sister || '없음'}`)
    },
    updateWord
};
function updateWord(n1, n2) {
    this.brother = n1;
    this.sister = n2;
};

wordNote.printWordNote();
console.log();

wordNote.updateWord('형', '누나');
wordNote.printWordNote();

//━━━━━━━━━━━━문제5번━━━━━━━━━━━━
