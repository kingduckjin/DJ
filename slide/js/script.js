// 이미지는 화면 중앙.
// 둥글게
// 슬라이드 버튼 화살표 호버됨.
// 다음 이미지로 넘어가면 이전 이미지로 넘어가는 버튼 생김.
// 반대로 마지막 이미지가 되면 다음 이미지로 넘어가는 버튼 사라짐.

// 추가 사항
// 이미지 하나가 다 넘어가기 전에 이미지가 넘어가면 안된다.
// = 중복 클릭 방지.

const $slide_container = document.getElementById('slide-container'),
  $image_container = $slide_container.querySelector('.image-container'),
  $images = $image_container.querySelectorAll('img');
const [$prev, $next] = $slide_container.querySelectorAll('img.button');

let slideIndex = 0;
let before = new Date();

$slide_container.addEventListener('click', function (event) {
  let after = new Date();

  if (1000 < (after - before)) {
    if (event.target === $prev) {
      slideIndex--;
    }

    if (event.target === $next) {
      slideIndex++;
    }

    console.log(slideIndex);

    $image_container.style.left = `-${slideIndex * 100}%`;
    before = after;

    if (slideIndex >= 1) {
      $prev.classList.remove('hidden');
    } else {
      $prev.classList.add('hidden');
    }

    if (slideIndex === $images.length - 1) {
      $next.classList.add('hidden');
    } else {
      $next.classList.remove('hidden');
    }
  }
});
