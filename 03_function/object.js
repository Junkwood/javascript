// 객체.
// 함수(입금기능), 함수(출금기능) => 5만라인.
// 작은기능1, 작은기능2, 작은기능3 ..... 작은기능n => 객체지향 프로그래밍.
// 학생(객체):학번,이름,점수,시멓친다,공부한다,잠잔다 => 속성, 기능 => 개체
let obj = {
  name: "홍길동",
  age: 20,
  score: 80,
  showInfo: function () {
    //메소드(함수).객체안의 함수를 메소드라고 부름.
    console.log(this);
    return `학생이름은 ${this.name}이고, 점수는 ${this.score}입니다.`; //obj내부에서는 this를 본 객체를 뜻하는 것임.
  },
};
//객체내부가 아닌 경우 this는 window를 뜻하며 window에 속한 메소드는 window 나 this 없이 사용가능함.
obj.name = "김병지";
console.log(obj.name); //obj['name']
console.log(obj.showInfo()); //객체.메소드 추출;

// 객체의 속성들.(for .. in ..)
for (let prop in obj) {
  console.log(`prop => ${prop} value => ${obj[prop]}`);
}
