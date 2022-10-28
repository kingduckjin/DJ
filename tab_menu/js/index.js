/**
 * < 구현 목표 >
 * 1. 리사이징 할 때 이벤트를 이용해 사이즈를 바꾸는 것을 구현.
 * 1.1. 사이즈가 변할 때마다 main에 margin-top 주는 것
 * 2. selected 클래스를 활용한다. 클릭됐을 시에 선택되고 색상이 변하는 것 구현.
 * 3. 이번에는 target이 아닌 a 태그의 href 속성을 이용해 div contents가 보이도록 만듬.
 *
 * < 흐름 분석 >
 * 1. 최초에 클릭되어있는 놈을 나타내는 변수가 필요함.
 * 2. 버튼을 클릭하면 클릭되어있는 놈의 클래스를 없애주고 클릭한 놈에게 클래스를 넣어줌.
 * 3. 클릭이 발생하면 이전 버튼 변수에 '현재' 버튼을 넣음. 그래야 다른 버튼을 누를 때 방금 내가 누른 버튼이 원래대로 돌아옴.
 * 4. 우리는 버튼을 클릭했을 때 내용물이 보이게끔 만들어야함. 하지만 그 이전에 기존에 보이던 놈을 숨겨야함.
 * 5. 숨기기 위해서는 우리가 클릭한 버튼의 href 속성을 알아야하고 이 속성을 통해서 contents의 id 속성과 일치하는 녀석을 보이거나 안보이게 만들면 된다.
 */

'use strict';

// 노드 가져옴
const $header = document.querySelector('header'),
  $a = $header.querySelectorAll('a');
const $main = document.querySelector('main');

// 최초의 열려있는 놈.
let beforeButton = $a[0];
// id를 저장하기 위한 변수
let contentId;

// main의 margin을 위한 함수.
function mainHeight() {
  $main.style.marginTop = `${$header.offsetHeight}px`;
}

// 상태 변경 함수.
function findChange(self, node) {
  self.querySelector(beforeButton.getAttribute('href')).style.display = 'none';
  self.querySelector(node.getAttribute('href')).style.display = 'block';
}

// 처음에 첫번째 버튼이 클릭된 상태여야함.
findChange($header, beforeButton);
// 이걸 실행해줘야 처음에 안밀림.
mainHeight();

// 이벤트 위임을 통한 하나의 이벤트.
$header.addEventListener('click', function (event) {
  if (event.target.tagName === 'A') {
    beforeButton.classList.remove('selected');
    event.target.classList.add('selected');

    // event.target의 href를 찾아 해당하는 contents를 보이게 만듬.
    findChange(this, event.target);

    // 실행 될 때마다 main margin이 변해야하므로 이쯤에.
    mainHeight();
    // 현재 클릭한 놈이 이전놈이 되는 시기.
    beforeButton = event.target;
  }
});

// 창의 너비나 높이에 변동이 있을 때에 실행되는 이벤트.
window.addEventListener('resize', mainHeight);
