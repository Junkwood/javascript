//function.js
//함수 표현식 정의.

// function sum(x,y){
//   let result = x+y;
//   console.log(`${x}, ${y}의 합은 ${result}입니다.`)
// }
// sum(10,20);

// let sum = function(x,y){
//     let result = x+y;
//   console.log(`${x}, ${y}의 합은 ${result}입니다.`)
// };

// console.log(sum);

let sum = (x,y) => {
    let result = x+y;
  // console.log(`${x}, ${y}의 합은 ${result}입니다.`);
  return result;//값을 반환.
};

// console.log(sum);
let result=sum(10,20);
console.log(result);

let sum2=sum;
sum2(100,200);

result = sum(sum(10,20),sum2(100,200));
console.log(`sum(10,20) + sum2(100,200) => ${result}`);

// let input = prompt('값을 입력');//결과값을 반환.