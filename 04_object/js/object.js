// object.js
let now = new Date(); //인스턴스 생성
now.getFullYear(); //인스턴스 메소드.

let ranVal = Math.random(); // 정적(static) 메소드.
console.log(ranVal);
let result = Math.floor(ranVal * 10);
console.log(result);
result = Math.min(10, 20);
console.log(result);
result = Math.max(10, 20);
console.log(result);

// 임의의 값을 생성 0 <= x < 10 =>소수점 2번째 자리까지
result = Math.floor(ranVal * 1000) / 100;

console.log(result);

// 클래스 선언
class Student {
  constructor(sno, sname, score) {
    this.sno = sno;
    this.sname = sname;
    this.score = score;
  }
}

let stud1 = new Student(100, "홍길동", 90); //인스턴스 생성.
let stud2 = new Student();
