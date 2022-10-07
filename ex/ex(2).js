'use strict';

let stName = prompt('학생명 : '); //학생이름 받는 변수
let tot = 0; // 점수 총합계를 표기할 변수

const sub = ['국어점수', '영어점수', '수학점수', '합계', '평균'];
//필요한 배열
const score = new Array(sub.length);


for (let i = 0; i < sub.length; i++) {
    if (i < sub.length - 2) {
        score[i] = +prompt(`${sub[i]}`);
        tot += score[i];
    } else if (i < sub.length - 1) {
        score[i] = tot;
    } else {
        score[i] = Math.trunc(tot / (sub.length - 2));
    }
}

document.write('<table>');
document.write(`<caption>&lt;${stName}학생 점수&gt;</caption>`);

for (let i = 0; i < sub.length; i++) {

    document.write('<tr>');
    document.write(`<th scope ="col">${sub[i]}</th>`);
    document.write(`<td>${score[i]}점</td>`);
    document.write('</tr>');

}
document.write('</table>');