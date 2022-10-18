'use strict';

let number1, number2, tot, a, b;
a = '정수를 입력하시오'
b = '니다.'
number1 = +prompt(`${a}(1) : `);
number2 = +prompt(`${a}(2) : `);
tot = number1 + number2;

if (isNaN(tot)) {
  alert(`두 수중 하나는 숫자가 아닙${b}.`);
} else {
  alert(`${number1} + ${number2} = ${tot} 입${b}`);
}
