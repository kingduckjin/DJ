/*
  < 문제 >

- 학생명과 국어, 영어, 수학 점수를 순서대로 입력받아 평균을 구하여 출력하는 프로그램 구현.
  단, 순서대로 정보를 입력받는 과정에서 어느 하나라도 값이 입력되지 않는 경우에는 다음 입력
  과정으로의 진행을 멈추고 "학생 정보가 순서대로 정확히 입력되지 않았습니다." 문구를 대화상자
  형태로 표시하고 프로그램이 종료되도록 구현.
*/

// 학생명 박성연 국어 90 영어 80 수학 70

// let stName, score1, score2, score3, tot;

// for (; ;) {
//     stName = prompt('학생명 : ');
//     if (stName) {
//         score1 = +prompt('국어점수 : ');
//         if (score1) {
//             score2 = +prompt('영어점수 : ');
//             if (score2) {
//                 score3 = +prompt('수학점수 :');
//                 tot = (score1 + score2 + score3) / 3;
//                 alert(`${stName} 학생의 국어, 영어, 수학 점수의 평균 : ${tot}`);
//                 break;
//             }
//         }
//     }
//     alert('학생 정보가 순서대로 정확히 입력되지 않았습니다.');
//     break;
// }
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// let stName, score1, score2, score3, everage;

// if (stName = prompt('학생명 : ')) {
//     if (score1 = +prompt('국어:')) {
//         if (score2 = +prompt('영어: ')) {
//             if (score3 = +prompt('수학: ')) {
//                 everage = (score1 + score2 + score3) / 3;
//                 alert(`${stName} 학생의 국어, 영어, 수학 점수의 평균: ${everage}`);
//             }
//         }
//     }
// }

// if (!score3) {
//     alert('학생 정보가 순서대로 정확히 입력되지 않았습니다.');
// }
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
let stName;
let kor, eng, math;

if (stName = prompt('이름 : ')) {
    if (kor = +prompt('국어 : ')) {
        if (eng = +prompt('영어 : ')) {
            if (math = +print('수학 : ')) {
                alert(`${stName} 학생의 국어, 영어, 수학 점수의 평균 : ${(kor + eng + math) / 3}`);
            }
        }
    }
}
if (!math) {
    alert('학생 정보가 순서대로 정확히 입력되지 않았습니다.')
    //위에서부터 트루값이여야 다음으로 넘어가는데
    //math값이 없다는건 앞에서 false 로 떴거나 math가 찐으로 false가됐거나.
}
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
(stName = prompt('이름 : '))
    && (kor = +prompt('국어 : '))
    && (eng = +prompt('영어 : '))
    && (math = +prompt('수학 : '))
    && alert(`${stName} 학생의 국어, 영어, 수학 점수의 평균 : ${(kor + eng + math) / 3}`);

math || alert('학생 정보가 순서대로 입력되지 않았습니다.');