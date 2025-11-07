// const obj = {
//   sno: 100,
//   snmae: "홍길동",
//   phone: "010-1234-1234",
// };
// //object -> text기반 -> 공유
// const json = JSON.stringify(obj);
// console.log(json);
// const str = `{"sno":100,"snmae":"홍길동","phone":"010-1234-1234"}`;
// console.log(JSON.parse(str));

const students = [
  { id: 100, name: "Hong" },
  { id: 101, name: "Hwang" },
  { id: 102, name: "Park" },
];

let idx = -1;
for (let i = 0; i < 3; i++) {
  if (students[i].name == "Hong") {
    idx = i;
  }
}
students.splice(idx, 1); //splice(idx,수정할갯수,수정할 내용)수정할 갯수가 0이면 추가함.

console.log(students);
