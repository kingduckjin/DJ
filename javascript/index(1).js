'use strict'

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         document.write(`${(v / 10 < 1 ? '&nbsp' : ' ') + v++} `);
//     }
//     document.write('<br/>')
// }

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
// document.write(`${(v / 10 < 1 ? '&nbsp' : ' ') + v++} `);
//     }
//     document.write('<br/>')
// }

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= 6 - i; j++) {
//         document.write(`${(v / 10 < 1 ? '&nbsp' : ' ') + v++} `);
//     }
//     document.write('<br/>')
// }


// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i > j) {
//             document.write(`&nbsp&nbsp&nbsp`);
//         } else {
//             document.write(`${(v / 10 < 1 ? '&nbsp' : '') + v++} `);
//         }
//     }
//     document.write('<br/>');
// } 

// for (let i = 1, v = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i < 6 - j) {
//             document.write('&nbsp;&nbsp;&nbsp;')
//         } else {
//             document.write(`${(v / 10 < 1 ? '&nbsp' : '') + v++} `);
//         }
//     }
//     document.write('<br/>');
// }



// for (let i = 1, v = 1; i <= 3; i++) {
//     for (let j = 1; j <= i + 2; j++) {
//         if (i < 4 - j) {
//             document.write('&nbsp;&nbsp;&nbsp;')
//         } else {
//             document.write(`${(v / 10 < 1 ? '&nbsp' : '') + v++} `);
//         }
//     }
//     document.write('<br/>')
// }

// let num, m;
// num = +prompt('줄 수')
// m = (num + 1) / 2;

// for (let i = 1, v = 1, st, ed; i <= num; i++) {
//     if (i <= m) {
//         st = m + 1 - i;
//         ed = i + num - m;
//     } else {
//         st = i - num + m;
//         ed = m + num - i;
//     }
//     for (let j = 1; j <= ed; j++) {
//         if (j < st) {
//             document.write('&nbsp;&nbsp;&nbsp;');
//         } else {
//             document.write(`${(v / 10 < 1 ? '&nbsp' : "") + v++
//                 } `)
//         }
//     }
//     document.write('<br/>');
// }
// 규민이가 만든거 +자 모양

// let a = [1, 2, 3, 4, 5];
