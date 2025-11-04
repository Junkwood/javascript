// function.js
let n1 = 10; // null값으로 대체.
let n2 = 20;
sum(n1, n2); // 함수호출.

let a1 = 11;
let a2 = 22;
sum(a1, a2);

sum(30);

// 함수(function) => 기능(function).
function sum(x, y) {
  if (x == undefined || x == null) {
    console.log('x값을 지정.');
    return; // 함수의 종료.
  }
  if (y == undefined || y == null) {
    console.log('y값을 지정.');
    return; // 함수의 종료.
  }
  result = x + y;
  console.log('두수의 합은 ' + result);
}