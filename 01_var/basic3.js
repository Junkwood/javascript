//배열의 인덱스는 0부터 시작.
let foods = ['감자탕', '짜장면', '탕수육', '햄버거'];
console.log(foods);
console.log(foods[0],foods[1]);

//배열요소의 값 변경.
foods[1]='짬뽕';
console.log(foods);

// 배열요소 추가
foods[4]='삼겹살';
console.log(foods);

//Math.random()랜덤값
console.log('임의의 값: '+Math.random())// 0<=x<1 사이의 무작위 값을 만들어 줌.
console.log(parseInt(Math.random()*100))
console.log(Math.floor(Math.random()*100))
console.log(Math.ceil(Math.random()*100))

let points = [
              Math.floor(Math.random()*100), 
              Math.floor(Math.random()*100), 
              Math.floor(Math.random()*100), 
              Math.floor(Math.random()*100), 
              Math.floor(Math.random()*100), 
              Math.floor(Math.random()*100), 
              Math.floor(Math.random()*100), 
              Math.floor(Math.random()*100),
              Math.floor(Math.random()*100)
              ]
let result; //완성(points 첫번째 + 네번째)
// result = points[0]+points[3];
//points첫번쨰+마지막
// result=points[0] + points[points.length-1]//points.length는 해당 배열의 길이를 의미함. -1하면 배열의 마지막 요소 인덱스가 됨.
// console.log(points)
// console.log(result);

let numbers = [];
// prompt 활용해서 숫자를 3번 입력. => 배열에 추가
//result에 대입. cosole에 result 출력
// numbers[0] = parseInt(prompt("숫자입력1"));
// numbers[1] = parseInt(prompt("숫자입력2"));
// numbers[2] = parseInt(prompt("숫자입력3"));

numbers[numbers.length] = parseInt(prompt("숫자입력"));
numbers[numbers.length] = parseInt(prompt("숫자입력"));
numbers[numbers.length] = parseInt(prompt("숫자입력"));

result=numbers[0]+numbers[1]+numbers[2]
console.log(numbers)
console.log(result)