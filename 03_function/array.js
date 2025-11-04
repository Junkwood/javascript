//1.concat
let ary1 = [1, 2, 3];
let ary2 = [4, 5, 6];
let result = ary1.concat(ary2);
console.log(ary1, ary2, result); //concat하면 기존 배열 뒤에 새 요소를 추가한 배열만듦.(기존배열은 유지)
result.push(11);
//2.every : 배열에 모든 요소값들이 매개함수의 조건을 만족하면 true, 하나라도 아니면 false.
let isTrueOfNot = result.every(function (elem, idx, ary) {
  if (elem % 2 == 0) {
    return true;
  } else {
    return false;
  }
  // return elem < 10;
});
console.log(isTrueOfNot);

//3.indexOf 특정값의 index값을 반환함. 없으면 -1 반환함.
let idx = result.indexOf(11);
console.log(`idx => ${idx}`);

idx = ["홍길동", "김민규", "박창식"].indexOf("박창식");
if (idx > -1) {
  alert("친구있음.");
} else {
  alert("친구없음.");
}
