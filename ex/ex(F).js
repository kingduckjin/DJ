'use strict';

let st = [
    ['이름', '국어점수', '영어점수', '수학점수', '합계', '평균'],
];

let stnum = +prompt('학생수: ');
for (let i = 1; i <= stnum; i++) {
    st[i] = new Array(st[0].length);
    st[i][st[i].length - 2] = 0;
}

// 저장
for (let i = 1; i <= st.length - 1; i++) {
    for (let j = 0; j < st[1].length - 2; j++) {
        st[i][j] = prompt(`${st[0][j]}: `);
        if (j > 0) {
            st[i][st[i].length - 2] += +st[i][j];
        }
    }
    st[i][st[i].length - 1] = Math.trunc(st[i][st[i].length - 2] / (st[i].length - 3));;
}

// 출력
for (let i = 1; i <= st.length - 1; i++) {
    document.write('<table>');
    document.write(`<caption>< ${st[i][0]} 학생의 성적 ></caption>`);
    for (let j = 1; j < st[1].length; j++) {
        document.write(`<tr><th>${st[0][j]}</th>`)
        document.write(`<td>${st[i][j]} 점</td></tr>`)
    }
    document.write('</table>');
}