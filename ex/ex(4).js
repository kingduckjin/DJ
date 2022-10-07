'use strict';

let stinfo = [
    ['학생이름', '국어점수', '영어점수', '수학점수', '합계', '평균'],
];
stinfo[1] = new Array(stinfo[0].length);

for (let i = 0, tot = 0; i < stinfo[0].length; i++) {
    if (i === 0) {
        stinfo[1][i] = prompt(`${stinfo[0][i]}`);
    } else if (i < stinfo[0].length - 2) {
        stinfo[1][i] = +prompt(`${stinfo[0][i]}`)
        tot += stinfo[1][i];
    } else if (i < stinfo[0].length - 1) {
        stinfo[1][i] = tot;
    } else {
        stinfo[1][i] = Math.trunc(tot / (stinfo[0].length - 2));
    }
}
// console.log(stinfo);

document.write('<table>');
document.write(`<caption>&lt;${stinfo[1][0]}학생의 성적&gt;</caption>`);

for (let i = 1; i < stinfo[0].length; i++) {
    document.write('<tr>')
    document.write(`<th>${stinfo[0][i]}</th>`);
    document.write(`<td>${stinfo[1][i]}점</td>`);
    document.write('</tr>');
}

document.write('</table>');