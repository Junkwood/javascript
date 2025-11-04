// function2.js

// 함수의 정의: differenceBetween2Number
//  매개 변수 : 두 수의 차이를 구하는 함수. 콘솔에 출력하는 함수.
function differenceBetween2Number(x, y) {
  if (x == undefined || x == null) {
    console.log('x의 값을 지정.');
    return;
  }
  if (y == undefined || y == null) {
    console.log('y의 값을 지정.');
    return;
  }

  if (x > y) {
    console.log(x - y);
  } else {
    console.log(y - x);
  }
} // end of differenceBetween2Number.

differenceBetween2Number(10);
