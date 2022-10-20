/* 
    < use strict >

- 자바스크립트는 기본적으로 별도의 변수 타입을 구분하지 않아 변수 선언 시 let, const, var과
  같은 구문 생략이 가능한  묵시적 변수 선언이  가능함으로써  유연하고 빠른  프로그래밍이 가능
  하지만, 이는 프로그램의 안정성 측면에서는 상당한 리스크를 수반.  따라서 프로그램의 안정성과
  좀 더 나은 성능 향상을 위해서 엄격모드(strict mode) 사용을 권장.

*/

// 'use strict';


// n2;


function test() {       // 함수의 선언 형식 : function 함수명() {  실행블럭; }

    // 'use strict';    // 함수에 이와 같이 지역적으로 엄격모드 선언 가능. 단, 이 때에도 전역적
    /*                     으로 선언할 때와 마찬가지로 함수의 선두에 선언되어야만 적용.      */
    n2 = 30;

}

// console.log(n2);     // 비 엄격모드에서의 묵시적 변수 선언은 함수 외부에서 바로 직접 참조는
test();                 // 안되지만, 함수 호출을 통해 전역변수처럼 참조 가능.
console.log(n2);