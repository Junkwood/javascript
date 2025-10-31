// v1.0 -> v2.0
// git 커밋 -> 현시점의 스냅샷.
// 함수(function)
console.log('자바스크립트 시작.')
// alert('경고창')
// confirm('저장하겠습니다')  //확인/취소 버튼있는 알림창.
// prompt('이름을 입력하세요') //값을 입력할 수 있는 알림창
document.writeln('<h3>이름은 홍길동<h3>')
console.log('콘솔창에 출력.')

// 변수. 자료형(datatype)
let myName = '서정우';//문자열
let myPoint = 120; //숫자
let isAdult = true; //boolean 불리언
let myHobby = ['독서', '여행', '요리'] //배열(객체취급)
let myAsset = {
  car : 'sonata',
  house : '아파트',
  cash : 1000000,
}//객체타입
let myFamily = null; // 값이 없을때는 undefined -> null 값을 주면 object로 바뀜


console.log(myName);
console.log(typeof isAdult)