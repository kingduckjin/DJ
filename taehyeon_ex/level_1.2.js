//레벨 1.2 - 타이머
//━━━━━━━━━━━━━━━1번━━━━━━━━━━━━━━━━━
// /*
//  * setTimeout을 통해서 time 변수만큼의 시간 뒤에 handler 함수를 실행시키고 싶다.
//  * handler 함수와 time 변수는 이 주석 하단에 직접 선언하고 내용을 작성하도록 한다.
//  * handler 함수 내에서는 time 변수에 2를 곱하는 내용이 들어있다.
//  * setTimeout은 이 주석 아래에 작성하며 4초 뒤에 실행되어야한다.
//  * handler 함수 내에 console.log를 통해 결과값을 출력한다.
//  */

// let time;
// time = 2000;

// function handler() {
//     setTimeout(() => {
//         document.write((time * 2));
//     });
// }

// setTimeout(handler, time);


//━━━━━━━━━━━━━━━━2번━━━━━━━━━━━━━━━
// for (let i = 0; i <= 60; i++) {
//     setTimeout(() => {
//         console.log(i++);
//     }, 1000*i);
// }

//━━━━━━━━━━━━━━━━3번━━━━━━━━━━━━━━━
// /*
//  * 1분동안 초를 세는 프로그램을 만들려고 한다.
//  * setInterval을 이용해 0초부터 시작해서 1분까지만 세는 프로그램을 구현하라.
//  * setInterval은 timer 함수를 선언한 뒤 그 안에서 실행하도록 구성하라.
//  * 60초를 초과하면 프로그램이 멈추도록 구성하라.
//  */

// function timer(timeoutNum) {
//     let startNum = 0;
//     let time = setInterval(() => {
//         console.log(startNum++);
//         if (startNum > timeoutNum) {
//             clearInterval(time);
//         }
//     }, 1000);
    
// }

// timer(5);