//basic2.js
//연산
let num1 = 10;// 숫자literal
let num2 = 20;

console.log(num1+num2);
console.log('두 변수의 + 연산결과: ' + num1 + num2);//문자열에 더하기는 뒤에도 number타입이지만 문자열로 취급하여 10+20을 계산한게 아닌 나열만 함.
console.log('두 변수의 + 연산결과: ' + (num1 + num2));

let str1 = 'Hello,';// 문자literal
let str2 = 'world';

console.log('두 변수의 + 연산 결과: ' + str1 + str2);

let temp1 = prompt('값을 입력하세요!!'); // 10 -> '10' 숫자 입력해도 문자열로 취급.
let temp2 = prompt('값을 입력하세요!!'); // 20 -> '20'
console.log('입력 값은 '+temp1);
console.log(parseInt(temp1)+parseInt(temp2))//parseInt를 하면 문자열로 작성된 숫자를 number타입으로 바꿔줌.
// 'hello'같은 문자열을 parseInt 하면 NaN(Not a Number)로 나옴.
console.log(temp1-temp2)
console.log(temp1*temp2)
console.log(temp1/temp2)
//-,*,/는 숫자형태의 문자열이 들어와도 알아서 변환해서 계산한 값을 number타입으로 출력해줌.
console.log(temp1==temp2)//==는 값이 같은지 참 거짓으로 출력함(boolean)