// for.js

let sum = 0; // 초기화.
// 1 ~ 100 까지 홀수값의 합.
for (let i = 1; i <= 100; i++) { // for블럭.
  if (i % 2 == 1) {
    sum = sum + i;
  }
}
console.log('1~100까지 홀수의 합: ' + sum);

// Math.random() => 값을 생성 1 ~ 10 사이의 값.
// 10번 실행해서 결과의 합을 result 저장. 출력.
// 0 + 1 <= Math.floor(Math.random() * 10) + 1 < 10 + 1
let result = 0;
for (let i = 1; i <= 10; i++) {
  result += Math.floor(Math.random() * 10) + 1;
  console.log('result => ' + result);
}
console.log('합: ' + result);

// prompt (몇 단 출력?) => 변수활용.
let num = prompt('입력>> ');
let html = '';
html += '<ul>';
for (let i = 1; i < 10; i++) {
  html += '<li> ' + num + ' * ' + i + ' = ' + (num * i) + '</li>';
}
html += '</ul>';
document.writeln(html);