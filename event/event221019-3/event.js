'use strict';

let btn = document.getElementsByTagName('button');

// ==================================================================================
// 새로운 팝업창1에 로드

let popup1, popup2;

btn[4].addEventListener('click', () => {

  /* 
      < screen.width 와 screen.height >

  - 실제 디스플레이 화면(모니터)에 대한 너비와 높이를 반환하며 화면 확대/축소에
    따른 비율과 관계없는 절댓값을 반환.


  - screen.width : 디스플레이 화면(모니터)의 전체 가로 픽셀(Pixel).

  - screen.height : 디스플레이 화면(모니터)의 전체 세로 픽셀(Pixel).
  */

  let locationX = (screen.width - 300) / 2;    // 팝업창의 중앙 배치를 위한 수평 좌표값 측정.
  let locationY = (screen.height - 300) / 2;   // 팝업창의 중앙 배치를 위한 수직 좌표값 측정.

  /*
      < screenLeft, screenTop > - 듀얼모니터인 경우 screen.width 나 screen.height 에 대한 부가 설정 필요.

  - 뷰포트에서의 브라우저창 왼쪽과 상단을 기준으로한 위치값을 각각 픽셀단위로 반환.

    screen.width 나 screen.height 는 듀얼모니터인 경우, 주 화면이 아닌 보조화면에서는
    주화면에서부터의 전체 수평(수직) 너비(높이)를 산출. 따라서 보조 화면에서의 정렬을
    위해서는 아래와 같이 screenLeft 를 이용하여 주화면 왼쪽으로부터 보조화면에서 열리는
    브라우저의 최초 수평 위치를 구하여, 그 지점부터의 화면너비를 산출하여 정렬해야함에
    주의.
  */
  // let locationX = screenLeft + (screen.width - 300) / 2; // 팝업창의 중앙 배치를 위한 수평 좌표값 측정.

  /*
      상기의 target 팝업창 명칭과 다르므로 새로운 팝업창 생성.
      target 명칭이 동일한 경우에는 기존 팝업창에 리로드.

  ====================================================================================

      < 브라우저 및 팝업 창의 width 와 height >

  - width(innerWidth), height(innerHeight) : 순수 페이지 영역이 보이는 영역으로 창의
    테두리, 제목표시줄, 주소표시줄, 각종 도구모음 등을 제외한 너비와 높이.
    단, 스크롤바는 포함됨에 주의.

  - outerWidth, outerHeight : 브라우저창이나 팝업창의 전체 너비와 높이로써 창의 테두리,
    제목표시줄, 주소표시줄, 각종 도구모음과 스크롤바등을 모두 포함한 너비와 높이.

  ====================================================================================
  
  ※ open 함수의 features 에 지정 가능한 너비와 높이는 innerWidth 와 innerHeight 로써
     팝업창에 대한 정확한 중앙 정렬을 지정하기 위해서는 outerWidth 와 outerHeight 로
     너비와 높이를 지정해야함에 주의.
 
  ====================================================================================
  
      < resizeTo >
 
  - 브러우저 창의 참조를 통해 창의 너비와 높이를 outerWidth 와 outerHeight 로 동적
    변경 가능한 메서드.
  */
  // popup2 = open('./html/changePage.html', '팝업창2', `width=300px, height=300px, left=${locationX}px, top=${locationY}px`);
  // popup2.resizeTo(300, 300);

  /* 
      open 함수에 지정할 innerWidth 와 innerHeight 는 resizeTo 함수를 이용해 다시
      outerWidth 와 outerHeight 로 재조정해야 하므로 아래와 같이 open 함수의 width 와
      height 는 생략 가능.
  */
  popup2 = open('./html/changePage.html', '팝업창2', `left=${locationX}px, top=${locationY}px`);
  popup2.resizeTo(300, 300);
});

// ==================================================================================
// 모든 팝업창 닫기

btn[5].addEventListener('click', () => {

  /* 
      open 메서드를 통해 반환된 팝업창 객체의 참조를 이용
      close 메서드를 호출함으로써 팝업창 닫기 실행.
  */
  popup1.close();
  popup2.close();
});