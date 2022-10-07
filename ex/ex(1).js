let stName = prompt('학생이름 : ');
let kor, eng, math;
let average;
let tot = 0;


const sub = ['국어점수', '영어점수', '수학점수', '합계', '평균'];
const scores = [];
//점수를 채워 넣을 배열

for (let i = 0; i < sub.length - 2; i++) {
    scores[i] = +prompt(`${sub[i]}`);
    tot += scores[i];
}
// sub.length -2 << 마지막 합계,평균 제외
// sub.length -2 배열에 들어간 만큼 합 계산

average = Math.trunc(tot / (sub.length - 2));
//평균 구하기

document.write('<table>');
document.write(`<caption>&lt; ${stName}학생의 성적&gt;</caption>`);

for (let i = 0, subjects; i < sub.length; i++) {

    document.write('<tr>');
    document.write(`<th>${sub[i]}</th>`);

    if (i < sub.length - 2) { // 합계, 평균 2
        subjects = scores[i];
    } else if (i < sub.length - 1) { // 평균 1
        subjects = tot;
    } else {
        subjects = average;
    }

    document.write(`<td>${subjects} 점</td>`);
    // sub.length -2 에서 subject값 > score 
    document.write('</tr>');
}

document.write('</table');
