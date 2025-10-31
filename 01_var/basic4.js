//basic4.js
//객체타입 / string, number, boolean => 원시유형 (primitive type) vs . 복합유형.
let myInfo = {
  name : '홍길동',
  age : 20,
  phone : '010-1111-1111',
  address : '대구 중구 중앙대로 100',
  height : 175.2
};// 하나에 여러가지 정보를 담은 객체.
console.log(myInfo['address']);
myInfo['address'] = '대구 중구 중앙대로 200';//속성은 string 타입으로 기입해야함. 그래서 '' 안에 속성명을 작성.
console.log(myInfo);

//학생(학생번호, 이름, 점수)
let student1 = {
  sno : 100,
  sname : '홍길동',
  score : 85
};
let students = [student1]
students[1]= {
  sno:200,
  sname: '김민석',
  score:92
}

let result;//홍길동, 김민석 점수 합 =>result 대입.
// result = students[0].score + students[1].score;
result = students[0]['score'] + students[1]['score'];
console.log(result)