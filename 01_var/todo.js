students = [];
students[students.length] = { no : 1001, name : '김철수', escore : 79, mscore : 90};
students[students.length] = { no : 1002, name : '나도향', escore : 90, mscore : 89};
students[students.length] = { no : 1003, name : '조항조', escore : 68, mscore : 100};


let sum = students[0]['escore']+students[0]['mscore']+students[1]['escore']+students[1]['mscore']+students[2]['escore']+students[2]['mscore'];
let average = sum/3;

console.log('점수 합계는 '+sum+'점 입니다.')
console.log('점수 평균은 '+average+'점 입니다.')

