'use strict';

const h1 = document.querySelector('h1'),
    button = document.querySelector('button');

console.log(h1)
console.log(button)

button.addEventListener('click', function changeString() {
    if (h1.textContent === '대충 제목') {
        h1.textContent = '바뀐 제목';
    } else {
        h1.textContent = '대충 제목';
    }
});