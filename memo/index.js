let body = document.querySelector('body'),
    h1 = document.querySelector('h1');

let blackBg_Btn = document.getElementById('blackBg_Btn'),
    whiteBg_Btn = document.getElementById('whiteBg_Btn'),
    blackBgGreenColor_Btn = document.getElementById('blackBgGreenColor_Btn'),
    whiteBgRedColor_Btn = document.getElementById('whiteBgRedColor_Btn'),
    commit_Btn = document.getElementById('commit_Btn');


function changeBlackBg() {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
}

function changeWhiteBg() {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
}

function changeBlackBg_green() {
    body.style.backgroundColor = 'green';
    body.style.color = 'black';
}

function changeWhiteBg_red() {
    body.style.backgroundColor = 'red';
    body.style.color = 'white';
}

// blackBg_Btn.addEventListener('click', changeBlackBg);


blackBg_Btn.addEventListener('click', () => {
    changeBlackBg();
});

whiteBg_Btn.addEventListener('click', () => {
    changeWhiteBg();
})

blackBgGreenColor_Btn.addEventListener('click', changeBlackBg_green);
whiteBgRedColor_Btn.addEventListener('click', changeWhiteBg_red);