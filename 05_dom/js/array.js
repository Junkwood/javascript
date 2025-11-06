// array.js
// console.log(products);
//for 반복문. 상품코드,상품명,카테고리,가격..만 콘솔에 출력.
//상품 명에 "노트북" 포함되면 모두 출력.

// for (let product of products) {
//   if (product.category == "사무용품") {
//     console.log(product.productCode, product.productName);
//   }
// }

console.log("abcde".indexOf("45")); //문자열에 indexOf 사용시 해당 문자가 문자열에 없으면 -1 반환. 있으면 0이상의 값을 index값으로 반환함.

products.forEach((elem) => {
  if (elem.productName.indexOf("노트북") >= 0) {
    console.log(
      elem.productCode,
      elem.productName,
      elem.category,
      elem.purchasePrice
    );
  }
});

//카테고리 중복없이 카테고리즈 배열에 넣기.
const categories = [];
for (let product of products) {
  if (categories.indexOf(product.category) < 0) {
    categories.push(product.category);
  }
}
console.log(categories);

//50000원 넘는 거 안넘는거 각자 배열에 넣기.
// const priceOvrer50000 = [];
// const priceUnder50000 = [];
// let result = {
//   over50000: [],
//   under50000: [],
// };
// for (let product of products) {
//   if (product.purchasePrice >= 50000) {
//     result.over50000.push(product);
//     // break;//하나만 넣고 말거면 break.
//   } else {
//     result.under50000.push(product);
//   }
// }
// console.log(result);
//상품 카테고리별 : 상품 합계금액.
let result = {};
for (let product of products) {
  if (!result[product.category]) {
    //undefined은 false취급이며 객체의 속성명을 꺼냈을 때 해당 속성이 기존에 없다는 뜻임.
    result[product.category] = 0; //기본적 속성은 문자로 보기때문에 실수로 선언.
  }
  result[product.category] += product.purchasePrice;
}
console.log(result);
