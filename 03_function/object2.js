// 객체실습.
// const stud1 = { sno: 100 };
const stud1 = new Object(); //이것도 객체생성선언.
stud1.sname = "홍길동"; //속성(string)추가
stud1["score"] = 90; //속성(number)추가
stud1.study = function () {
  console.log(`${this.sname}이 공부합니다.`);
};
stud1.friendName = ["김길동", "최은식", "마동일"]; //속성(배열)추가
stud1.teacher = { tname: "허정무", age: 40 };
stud1.study();
stud1.addFriend = function (newFriend) {
  stud1.friendName[stud1.friendName.length] = newFriend;
};

stud1.addFriend("박충식");

console.log(stud1);
console.log(stud1["teacher"]["age"]);
console.clear();

//배열
const numbers = []; //new Array();
numbers.push(10);
numbers.push(20); // 뒤에 넣기
numbers.unshift(30); // 앞에 넣기
// numbers.pop();//뒤에서 빼기
// numbers.shift();//앞에서 빼기
// console.log(numbers);
numbers.push(100);
numbers.push(150);
let sum = 0;
numbers.forEach(function (elem, idx, ary) {
  // elem:배열요소, idx:인덱스, ary:배열
  console.log(elem);
  if (elem < 100) {
    sum += elem;
  }
});
console.log(`100 미만인 numbers의 합계 : ${sum}`);

//배열 [객체,객체,객체]
const members = [
  { memberId: "user01", memberName: "홍길동", phone: "010-1111-1111" },
];
members.push({
  memberId: "user02",
  memberName: "김우진",
  phone: "010-2222-2222",
});
members.push({
  memberId: "admin",
  memberName: "박명환",
  phone: "010-9999-9999",
});
//foreach반복
members.forEach(function (elem, idx, ary) {
  console.log(`이름 : ${elem.memberName}`);
});
let searchName = prompt("이름을 입력하세요");

console.log(typeof members);
// let cnt = 0;
// members.forEach(function (elem, idx, ary) {
//   if (elem.memberName == searchName) {
//     alert(`연락처 : ${elem.phone}`);
//     cnt++;
//   }
// });
// if (cnt == 0) {
//   alert("찾는 이름이 없습니다.");
// }

let searchPhone = "";
members.forEach(function (elem, idx, ary) {
  if (elem.memberName == searchName) {
    searchPhone = elem.phone;
  }
});
// '',null,0,undefined == false.
if (searchPhone) {
  alert(`연락처 : ${searchPhone}`);
} else {
  alert("찾는 이름이 없습니다.");
}
