'use strict';

document.write('')
// 배열선언
const array1 = new Array(5);

// 2차배열선언
for (let i = 0; i < array1.length; i++) {
    array1[i] = new Array(5);
}

// 2차배열 값 저장
for (let i = array1.length - 1, v = 1; i >= 0; i--) {
    for (let j = array1.length - 1; j >= 4 - i; j--) {
        array1[i][j] = v++;
    }
}

// 2차배열 값 출력
for (let i = 0; i < array1.length; i++) {
    for (let j = 0, dj; j < array1[i].length; j++) {
        dj = array1[i][j];
        if (j < array1.length - 1 - i) {
            document.write('&nbsp;&nbsp;&nbsp;');
        } else {
            document.write(`${dj / 10 < 1 ? '0' : ''}${dj} `);
        }
    }
    document.write(`<br/>`);
}
document.write(`<br/>`);

///////////////////////////////////////////////////////////////////

//임시배열 선언
const array2 = new Array(5);

//임시배열 2차선언
for (let i = 0; i < array1.length; i++) {
    array2[i] = new Array(5);
}

//2차배열 값 저장
for (let i = 4; i >= 0; i--) {
    for (let j = 4; j >= 0; j--) {
        array2[j][4 - i] = array1[i][j];
    }
}

//2차배열 값 출력
for (let i = 0, dj2; i < array2.length; i++) {
    for (let j = 0; j <= i; j++) {
        dj2 = array2[i][j];
        document.write(`${dj2 / 10 < 1 ? '0' : ''}${dj2} `);
    }
    document.write('<br/>');
}
document.write(`<br/>`);

///////////////////////////////////////////////////////////////////////

//임시배열 선언
const array3 = new Array(5);

//임시배열 2차선언
for (let i = 0; i < 5; i++) {
    array3[i] = new Array(5);
}

//2차배열 값 저장
for (let i = 4; i >= 0; i--) {
    for (let j = 4; j >= 0; j--) {
        array3[4 - i][4 - j] = array1[i][j];
    }
}

//2차배열 값 출력
for (let i = 0, dj3; i < 5; i++) {
    for (let j = 0; j <= 4 - i; j++) {
        dj3 = array3[i][j];
        document.write(`${dj3 / 10 < 1 ? '0' : ''}${dj3} `);
    }
    document.write('<br/>');
}
document.write(`<br/>`);

////////////////////////////////////////////////////////////////////////////

//임시배열 선언
const array4 = new Array(5);

//임시배열 2차선언
for (let i = 0; i < 5; i++) {
    array4[i] = new Array(5);
}

//2차배열 값 저장
for (let i = 4; i >= 0; i--) {
    for (let j = 4; j >= 0; j--) {
        array4[4 - j][i] = array1[i][j]
    }
}

//2차배열 값 출력
for (let i = 0, dj4; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        dj4 = array4[i][j];
        if (i > j) {
            document.write('&nbsp;&nbsp;&nbsp;');
        } else {
            document.write(`${dj4 / 10 < 1 ? '0' : ''}${dj4} `);
        }
    } document.write('<br/>');
}
