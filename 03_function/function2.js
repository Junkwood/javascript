//반환값.
const count2Times = (x) => { //const는 상수변수로 재할당이 불가함.
  let result=x*2;
  return result;
}

// count2Times = 10;
let result = count2Times(10);

// 매개값을 x,y 가지는 함수:addNumbers
// x~y사이의 정수를 합한 결과를 반환해주는 함수.
const addNumbers = (x,y) =>{
  let result = 0 ;
  for(let i = x; i <= y; i++){
    result += i;
  }
  return result;
}
console.log(`addNumber(10,20)의 결과 ${addNumbers(10,20)}`);

//매개값을 [10,20,30] 가지는 함수 sumArray
//배열의 전체 값을 더한 결과를 반환.

const sumArray = (array) => {
  let result = 0;
  for(let i = 0; i < array.length; i++ ){
    result += array[i];
  }
  return result;
}
console.log(`sumArray([10,20,30])의 결과 ${sumArray([10,20,30])}`);


// let name='Hong';

// name = 'hwang';