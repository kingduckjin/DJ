'use strict';

// const menuBtn = document.getElementsByTagName('a');

// let beforeBtn = menuBtn[0];

// for (let i = 0; i < menuBtn.length; i++) {
//     menuBtn[i].addEventListener('click', function () {
//         beforeBtn.classList.remove('selected');
//         this.classList.add('selected');
//         beforeBtn = this;
//         console.log(this)
//     })
// }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const menuBtn2 = document.getElementsByTagName('a');
const contents = document.querySelector('.contents');
const header = document.querySelector('header');
const main = document.querySelector('main');

let beforeBtn2 = menuBtn2[0];

function setMain() {
    main.style.marginTop = header.offsetHeight + 'px';
}

function viewContent(self){
    contents.querySelector(beforeBtn2.getAttribute('href')).style.display = 'none';
    contents.querySelector(self.getAttribute('href')).style.display = 'block';

}

viewContent(beforeBtn2);
setMain();

for (let i = 0; i < menuBtn2.length; i++) {
    menuBtn2[i].addEventListener('click', function () {
        beforeBtn2.classList.remove('selected');
        this.classList.add('selected');

        viewContent(this);
    
        setMain();
        beforeBtn2 = this;
    });
}

window.addEventListener('resize', setMain)

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

