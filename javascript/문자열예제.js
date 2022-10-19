'use strict';

//예제 2번━━━━━━━(case 1)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
let email = 'qy15@naver.com';
email = email.replace(email.substring(email.indexOf('@')), '@naver.com');
console.log(email);

//예제 2번━━━━━━━(case 2)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// let email = prompt('이메일을 입력하시오 : ');
// email = email.replace(email.slice(email.indexOf('@') + 1), 'naver.com');
// alert(email);


//예제 3번━━━━━━━(case 1)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 주민번호 입력
// alert('하이폰(-)을 공백으로 변경하시겠습니까?')
// alert(rrn)//하이폰 ㅂㅇ
// alert(rrn)//하이폰 ㅇㅋ
// let rrn = prompt('주민번호 : ');

// if (rrn.includes('-')) {

//     if (confirm('하이폰(-)을 공백으로 변경하시겠습니까?')) {
//         rrn = rrn.replace('-', ' ');
//     }

// }
// alert(rrn);

//예제 4번━━━━━━━(case 1)━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// step1 > http:// 제외하고 추출
// step2 > 닷 부터 표시되는 문자열을 제외하여 추출.
// step3 > '$'+ 처음 3자리 + 총 글자 수 + url 의 14번째 문자
// let url = 'http://daum.net'
// let step1, step2, step3;

// console.log(url.slice(url.lastIndexOf('/')+1))
// step1 = url.slice(url.indexOf('//') + 2);
// // step1 = url.split('//')[1];
// // console.log(url.split('//'));
// console.log(step1);

// step2 = step1.slice(0, step1.indexOf('.'));
// step2 = step1.split('.')[0];
// console.log(step1.split('.'));
// console.log(step2);

// step3 = `$${step2.slice(0, 3) + step2.length}${url[13] ? url[13] : '?'}`;
// console.log(step3);