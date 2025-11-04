// while2.js
// 1 ~ 10 까지 임의의 값이 생성. 누적하기. 종료조건은 10이면 종료.

let sum = 0;
while(true) {
  let randomNum = Math.ceil(Math.random() * 10);
  console.log(randomNum);
  sum += randomNum;
  // 종료조건.
  if (randomNum == 10) {
    break; // 반복문 종료.
  }
}
console.log('합계: ' + sum);

console.clear();
sum = 0;
while(true) {
  let randomNum = Math.ceil(Math.random() * 10);
  console.log(randomNum);
  sum += randomNum;
  // 종료조건.
  if (randomNum != 10) {
    continue;
  }
  break;
}
console.log('합계: ' + sum);


/*
다중라인 주석.
*
**
***
****
*****
*/
let star = '';
for (let i = 1; i <= 5; i++) {
  star = '';
  for (let j = 1; j <= i; j++) {
    star += '*';
  }
  console.log(star);
}