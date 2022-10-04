'use strict'

// //배열선언
// let array1 = new Array(7);

// //2차배열선언
// for (let i = 0; i < array1.length; i++) {
//     array1[i] = new Array(array1.length);
// }

// //2차배열값저장

// for (let i = array1.length - 1, v = 1; i >= 0; i--) {
//     for (let j = array1.length - 1; j >= 6 - i; j--) {
//         array1[i][j] = v++;
//     }
// }
// //2차배열값 출력


// for (let i = 0, dj; i < array1.length; i++) {
//     for (let j = 0; j < array1.length; j++) {
//         dj = array1[i][j];
//         if (i < 6 - j) {
//             document.write('&nbsp;&nbsp;&nbsp;');
//         } else {
//             document.write(`${dj / 10 < 1 ? '0' : ''}${dj} `)
//         }
//     } document.write('<br/>');
// }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 배열선언
let array2 = new Array(5);

//2차배열선언
for (let i = 0; i < array2.length; i++) {
    array2[i] = new Array(5);
}

//2차배열값저장
for (let i = array2.length - 1, v = 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
        array2[j][i] = v++
    }
}

//2차배열값출력
for (let i = 0, dj2; i < array2.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        dj2 = array2[i][j];
        if (i <= j) {
            document.write(`${dj2 / 10 < 1 ? '0' : ''}${dj2} `)
        } else {
            document.write('&nbsp;&nbsp;&nbsp;')
        }
    }
    document.write('<br/>')
}