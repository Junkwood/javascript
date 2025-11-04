// while3.js
// 배열의 크기 5: 51 ~ 100 사이의 임의 수.

let randomAry = [];
for (let i = 0; i < 5; i++) {
  randomAry[i] = Math.ceil(Math.random() * 50) + 50;
}
console.log(randomAry);

// 최대값을 구하는 반복문.
// 각 배열의 요소의 갯수만큼 처리.
// 각 요소의 값과 max를 비교해서 배열요소의 값이 크면 max 변경.
//                             max값이 크면 변경 안함.

let x = 20;
let y = 30;
// x, y의 값을 서로 교환.
let temp = x;
x = y; // x:30, y:30
y = temp;

temp = 0;
for (let j = 0; j < randomAry.length - 1; j++) {
  for (let i = 0; i < randomAry.length - 1; i++) {
    if (randomAry[i] > randomAry[i + 1]) {
      // 위치변경.
      temp = randomAry[i];
      randomAry[i] = randomAry[i + 1];
      randomAry[i + 1] = temp;
    }
  }
}
console.log(randomAry);