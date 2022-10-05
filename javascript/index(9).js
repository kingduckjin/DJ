/* 
    < 이메일 주소와 개인 전화번호를 이용한 비밀번호 생성 >

step1 : 이메일 주소의 "@" 직전의 두 글자.                           =>      58
step2 : 이메일 주소의 "." 직전까지의 전체 문자열 크기.               =>      15
step3 : 개인 전화번호의 두 번째 "-" 문자 이후 두 개 숫자.            =>      56
010-4200-1867
password : 이메일 주소의 두 번째와 세 번째 문자 + step1 + step2 + step3

※ 단, 이메일 주소의 두 번째 문자가 문자형태이면 그 값 그대로를
    결합하고 숫자타입이면 "@" 문자 다음의 첫 글자를 이용하여 결합.

< 예시 >

psy7758@hanmail.net     =>      sy581556

k1234@naver.com         =>      n2341156

*/
// 'use strict';

// let email, PNum, a, password, step1, step2, step3;
// email = prompt('이메일을 입력하시오', '@를 포함');
// PNum = prompt('핸드폰 번호를 입력하시오', '- 포함');
// a = email.indexOf('@');
// // email = 'k1234@naver.com';
// // PNum = '010-4200-5600'

// //step1
// step1 = email.slice(a - 2, a);
// // step1 = email.split('@')[0].slice(2);

// // step2
// step2 = email.split('.')[0].length;

// //step3
// step3 = PNum.slice(PNum.lastIndexOf('-') + 1, PNum.lastIndexOf('-') + 3);
// // console.log(step3)

// if (isNaN(email.slice(1, 2))) {
//     password = email.slice(1, 3) + step1 + step2 + step3;
// } else {
//     password = (email.slice(a + 1, a + 2)
//         + email[2]) + step1 + step2 + step3;
// }
// // console.log();
// // console.log(password);
// alert(`생성된 비밀번호는 ${password} 입니다.`);

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

'use strict';

// let email = 'psy7755@hanmail.net';
let email = 'k1234@naver.com';

let phoneNum = '010-1234-5678';
let step1, step2, step3;
let password;

step1 = email.split('@')[0].slice(-2);

step2 = email.split('.')[0].length;

step3 = phoneNum.split('-')[2].slice(0.2);

password = `${isNaN(email[1]) ? email.slice(1, 3) : email.split('@')[1][0] + email[2]}${step1 + step2 + step3}`;
console.log(password);


//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
