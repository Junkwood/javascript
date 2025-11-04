//1. 함수 매개값으로 5 => 5단 출력
function guguDan(dan){
  console.log(`${dan}`);
  for(let i= 1; i<=9; i++){
    console.log(`${dan} * ${i} = ${dan*i}`)
  }
}
guguDan(5)//함수호출

//2. 함수 매개값으로 7=>1부터 7까지의 합 콘솔 출력.
function summary(n){
  let sum=0;
  for(let i=1; i<=n;i++){
    sum += i;
  }
  console.log(`1부터 ${n}까지의 합 : ${sum}`)
}
summary(7)

//3. 함수(addNumber) 매개값 x,y =>4,10사이의 정수의 합을 출력.
function addNumber(x,y){
  let sum=0;
  for(let i=x; i<=y;i++){
    sum+=i;
  }
  console.log(`합계는 ${sum}`)
}
addNumber(1,5)

//4.별나무.
function printStars(n) {
  for (let i = 1; i <= n; i++) {
    let stars = "";
    for(let k = n; k > i; k--){
      stars += " ";
    }
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}
printStars(5);