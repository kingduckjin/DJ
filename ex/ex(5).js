'use strict';

let stinfo = [
    ['학생이름', '국어점수', '영어점수', '수학점수', '합계', '평균'],
];
stinfo[1] = new Array(stinfo[0].length);
stinfo[1][4] = 0;
stinfo[1][5] = 0;

for (let i = 0, tot = 0; i < stinfo[0].length - 2; i++) {
    stinfo[1][i] = prompt(`${stinfo[0][i]}`);

    if (i >= 1) {
        stinfo[1][4] += +stinfo[1][i];
    }
}

stinfo[1][5] = Math.trunc(stinfo[1][4] / 3);

document.write('<table>');
document.write(`<caption>&lt;${stinfo[1][0]}학생의 성적&gt;</caption>`);

for (let i = 1; i < stinfo[0].length; i++) {
    document.write('<tr>')
    document.write(`<th>${stinfo[0][i]}</th>`);
    document.write(`<td>${stinfo[1][i]}점</td>`);
    document.write('</tr>');
}

document.write('</table>');