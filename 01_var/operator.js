console.log(result);
//연산자
console.log(heading);

result = 30 % 20;//몫(1) 나머지(10)
console.log(result)
result++;//증감연산자
console.log(result)
result--;//증감연산자
console.log(result)

//할당연산자.
let str = 'Hello';
result = str = 'world';
console.log(result,str);


console.clear();//이전 콘솔 로그를 지우기.
result = result + ', Another';
result += ' World'//위의 과정을 줄임.

console.log(result)

let num = 10;
num *= 10;
console.log(num);
num -= 10;
console.log(num);
num /= 10;
console.log(num);
num += 10;
console.log(num);


//비교연산자.(true false를 반환.)
let temam = 'red'
team = 10;
console.log(10=='10');// == 숫자의 경우 문자타입도 값이 같기만하면 true ===는 타입도 같아야 같음.
console.log(10==='10')
console.log(10<'10')

//논리연산자. true %% true => true, true||false => true, false||false => false

console.clear();
console.log(10<=10&&10<10);
console.log(10<=10||!(10<10));//!는 부정.