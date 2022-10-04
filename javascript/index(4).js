'use strict'

const a = new Array(5);

for (let i = 0; i < a.length; i++) {
    a[i] = new Array(5);
}

let s = 5;
let r = 0, c = -1;
let v = 1;
let f = 1;

for (; ;) {
    for (let i = 0; i < s; i++) a[r][c += f] = v++;

    if (--s <= 0) break;

    for (let i = 0; i < s; i++) a[r += f][c] = v++;

    f = -f;
}

for (let i = 0, av; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
        av = a[i][j];
        document.write(`${av / 10 < 1 ? '0' : ''}${av} `)
    }
    document.write('<br/>')
}


let count = 5; // 배열의 길이, 최초 반복 횟수
let row = 0, col = -1; // 행과 열의 최초 번호
// 열의 경우 +1 해서 0으로 만들어야 하기 때문에 -1로 지정
let number = 1; // 출력될 숫자
let direction = 1; // 방향을 담당하는 숫자. 1과 -1을 반복하며 할당됨.

count = 5; // 최초 반복은 여전히 5다.
row = 5, col = 0; // col은 첫 루프가 열고정이기 때문에 0으로 시작해도 된다.
// row의 경우에는 첫 루프가 열고정이라서 행이 바뀌는 구조이고 -값이 적용되어야한다. 따라서 5로 시작해야한다.
// 그래야 5가 -1 되면 4로 시작한다. 배열의 길이가 5고 -1이 4이기 때문
number = 1; // 출력될 숫자
direction = -1; // 첫 루프가 감소 반복이기 때문에 -1로 설정.

// 1차원 배열 생성
const array2 = new Array(count);
// 1차원 배열의 각 원소에 2차원 배열 생성
for (let row = 0; row < array2.length; row++) {
    array2[row] = new Array(count);
}

// 달팽이 만들기 위한 무한루프
for (; ;) {
    // 열이 고정되는 상태로 돌아가는 반복문
    for (let i = 0; i < count; i++) {
        // 4 0부터 시작해야 한다. 5였던 row에 direction을 더해 4로 만들어준다.
        // 0이 되면 반복이 끝나서 아래로 넘어간다
        array2[row += direction][col] = number++;
    }

    // 첫 루프가 증가식, 두 번째 루프가 증가식이었던 위의 경우와는 다르게
    // 이 경우는 첫 루프가 감소식 두번째 세번째 루프부터 증가식, 그 다음 두 루프는 다시 감소식이라는 규칙을 가지기 때문에 direction이 이 쪽으로 올라와야한다.
    direction = -direction;
    // 이 부분은 똑같이 최초 한 번은 5고 그 다음부터 한 세트로 1씩 줄어들기 때문에 여기에 있어야한다.
    if (--count <= 0) break;

    // 행이 고정되는 상태로 돌아가는 반복문
    for (let i = 0; i < count; i++) {
        // 열고정에서 0이었으니 행고정에서는
        // 행이 1 증가해야 하기 때문에 최초에는 0이다.
        // 이 반복문이 돌면 1부터 시작한다. 그래서 0.1 / 0.2 / 0.3 / 0.4 이런식으로 찍힌다.
        array2[row][col += direction] = number++;
    }
}

// 배열 출력
// 출력은 언제나 행이 먼저고 열이 그 다음이다.
document.write('<h2>달팽이 2</h2>');
for (let row = 0; row < array2.length; row++) {
    for (let col = 0, value; col < array2[row].length; col++) {
        value = array2[row][col];
        document.write(`${value / 10 < 1 ? '&nbsp;&nbsp;' : '&nbsp;'}${value} `);
    }

    document.write('<br />');
}