// 조건문
if(10<=10){
  //if블럭에 구현.
}
// 회원(회원번호, 회원명, 회원점수(75)) =>객체
// 1001, 김민준, 123/ 1002, 박설명, 95/ 1003, 이충희, 100
// members 배열에 저장.
// result에 3회원의 점수 합계. 콘솔에 출력.
let members=[
  {
  mno : 1001,
  mname : '김민준',
  mscore : 123
},
{
  mno : 1002,
  mname : '박설명',
  mscore : 95
},
{
  mno:1003,
  mname:'이충희',
  mscore:100
}
];
result={
  sum : members[0]['mscore']+members[1]['mscore']+members[2]['mscore'],
  average : (members[0]['mscore']+members[1]['mscore']+members[2]['mscore'])/members.length
}
console.log('세사람의 점수 합계는 '+result['sum']+'점 입니다.');
console.log('세사람의 점수 평균은 '+result['average']+'점 입니다.');

// for(i=0;i<3;i++){
//   if(members[i].mscore>result.average){
//     console.log(members[i].mname+'님은 평균보다 점수가 높습니다.')
//   }else if(members[i].mscore==result.average){
//     console.log(members[i].mname+'님의 점수는 평균값과 일치합니다.')
//   }
//   else{
//     console.log(members[i].mname+'님은 평균보다 점수가 낮습니다.')
//   }
// }

let idx=2
if(members[idx]['mscore']>result['average']){
  console.log(members[idx]['mname']+'님의 점수는 평균보다 큽니다.')
}else if(members[idx]['mscore']<result['average']){
  console.log(members[idx]['mname']+'님의 점수는 평균보다 작습니다.')
}else{
  console.log(members[idx]['mname']+'님의 점수는 평균과 같습니다.')
}