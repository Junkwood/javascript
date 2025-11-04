// for2.js
let numbers = [23, 17, 92, 33, 48, 52]; 
// numbers[0], numbers[1] .... , numbers[numbers.length - 1]
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]); // i 값의 범위 : 0 ~ 5
  // if (i % 2 == 0 && numbers[i] % 2 == 0) { // 홀수번째 위치 & 값이 짝수.
  if (i % 2 == 0 || numbers[i] % 2 == 1) { // 홀수번째 위치 또는 홀수 값 => 누적.
    sum += numbers[i];
  }
}
console.log('합계점수: ' + sum);

let students = [{sno: 100, sname: '김민주', score: 88, gender: 'Female'},
  {sno: 200, sname: '박성하', score: 90, gender: 'Male'},
  {sno: 300, sname: '오혜경', score: 77, gender: 'Female'},
  {sno: 400, sname: '황성찬', score: 58, gender: 'Male'},
  {sno: 500, sname: '최유진', score: 67, gender: 'Female'}
];
// 학생번호: 100, 이름: 김민주, 점수: 88
for (let i = 0; i < students.length; i++) {
  console.log('학생번호: ' + students[i]['sno'] + ', 이름: ' + students[i]['sname'] + ', 점수: ' + students[i]['score']);
}
console.clear();

let totalScore = 0; // 학생점수 합계한 결과.
let average = 0; // 학생평균.
let count = 0; // 조건을 만족하는 사람.
for (let i = 0; i < students.length; i++) {
  // if(students[i].score >= 60) { // 점수가 60 이상인 학생들.
  if(students[i].score >= 60) { // 여학생들의 평균.
    totalScore += students[i].score; //students[i]['score'];
    count++;
  }
}
// average 계산하기.
average = totalScore / count;

console.log('합계점수: ' + totalScore + ', 평균: ' + average);