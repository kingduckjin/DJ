'use strict';

// const a = new Array(5);

// for (let i = 0; i < a.length; i++) {
//     a[i] = new Array(4);
// }

// // 1단계 졸업
// // 고정이 외각 - 열 /변동 - 행 내부
// for (let i = 3, v = 1; i >= 0; i--) {
//     for (let j = 4; j >= 0; j--) {
//         a[j][i] = v++;
//     }
// }

// //값저장

// for (let i = 0, dj; i < a.length; i++) {
//     for (let j = 0; j < a[i].length; j++) {
//         dj = a[i][j];
//         document.write(`${dj / 10 < 1 ? '&nbsp;' : ''}${dj} `);
//     }
//     document.write(`<br/>`);
// }

const a = new Array(5);

for (let i = 0; i < 5; i++) {
    a[i] = new Array(5);
}

for (let i = 4, v = 1; i >= 0; i--) {
    for (let j = 4; j >= 4 - i; j--) {
        a[i][j] = v++;
    }
}

for (let i = 0, dj; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        dj = a[i][j];
        if (j < 4 - i) {
            document.write('&nbsp;&nbsp;&nbsp;');
        } else {
            document.write(`${(dj / 10 < 1 ? '&nbsp;' : '')}${dj} `);
        }
    }
    document.write('<br/>');
}