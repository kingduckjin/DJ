'use strict';

let stName = prompt('학생이름 : '); //학생이름 받기
let tot = 0; //점수합계 변수

const sub = ['국어점수', '수학점수', '영어점수']; //과목별 배열선언
const score = new Array(sub.length); //

for (let i = 0; i < sub.length; i++) {
    score[i] = +prompt(`${sub[i]}`);
    tot += score[i];
}

document.write('<table>');
document.write(`<caption>&lt;${stName} 학생의 성적&gt;</caption>`);

for (let i = 0; i < sub.length; i++) {
    document.write('<tr>');
    document.write(`<th>${sub[i]}</th>`);
    document.write(`<td>${score[i]}</td>`);
    document.write('</tr>');
}

document.write('<tr>');
document.write(`<th>합계</th>`);
document.write(`<td>${tot}점</td>`);
document.write('</tr>');

document.write('<tr>');
document.write(`<th>평균</th>`);
document.write(`<td>${Math.trunc(tot / sub.length)}점</td>`);
document.write('</tr>');

document.write('</table>');


