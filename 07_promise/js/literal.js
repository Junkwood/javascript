//
let name = "홍길동";
let age = 20;
let msg;
if (age >= 20) {
  msg = "성인입니다";
} else {
  msg = "미성년입니다.";
}

console.log("이름은 " + name + " 이고, 나이는 " + age + " 입니다 " + msg);
console.log(
  `이름은 ${name} 이고, 나이는 ${age} 입니다 ${
    age >= 20 ? "성인입니다" : "미성년입니다."
  }`
);
//3항연산자 (참거짓 판단할 요소) ? (참일경우 처리할 요소) : (거짓일 경우 처리할 요소)

let score = 78;
// 홍길동은 합격 입니다.
console.log(`${name}은 ${score >= 60 ? "합격입니다" : "불합격입니다."}`);

let numAry = [60, 70, 55, 80, 49]; //forEach, filter, map, reduce
// let result = numAry.forEach(); //forEach는 반환값이 없음.
console.log(
  `<span>${numAry.filter((elem) => elem >= 60).join("</span><span>")}</span>`
); //filter는 조건에 해당하는 요소들로 새 배열 만듦.
//join은 배열 요소들을 연결해서 문자열로 만들어줌.
//map(ping) A=>A'

result = numAry.map((elem, idx, ary) => {
  const obj = {};
  obj.ord = idx;
  obj.val = elem;
  return obj; // `순번은 ${idx} => 값은 ${elem}`;
}); //map은 모양 바꾸는 용도.
console.log(result);
console.log(`${numAry.map((elem) => "<span>" + elem + "</span>").join("")}`);
