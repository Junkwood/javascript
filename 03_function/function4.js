// setTimeout 함수
// 비동기 함수 vs 동기함수
// 초기값 => 10 더하기 => *2 => 5를 뺀 결과를 계산.
let initValue = 10;

// let result = initValue + 10;
// result = result * 2;
// result = result - 5;
// console.log(result)

// setTimeout(function(){}, 1000);//함수, 시간(밀리초단위)
let result;

setTimeout(function () {
  result = initValue + 10;
  console.log(`첫번째 ${result}`);

  setTimeout(() => {
    result = result * 2;
    console.log(`두번째 ${result}`);

    setTimeout(() => {
      result = result - 5;
      console.log(`세번째 ${result}`);
    }, 1000);
  }, 1500);
}, 2000);

console.log(`최종 결과 : ${result}`);
