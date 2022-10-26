const box = document.querySelector('div');

box.addEventListener('mouseenter', function changeCol() {
    box.style.backgroundColor = 'black';
    box.style.color = 'white'
    box.style.transition = 'background 0.5s'
})

box.addEventListener('mouseleave', function changeBefor() {
    box.style.backgroundColor = 'red'
    box.style.color = 'black';
})
