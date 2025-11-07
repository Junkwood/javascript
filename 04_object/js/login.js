//login.js
const db = [
  { usrerId: "user01", password: "1111" },
  { usrerId: "user02", password: "2222" },
  { usrerId: "user03", password: "3333" },
];
const students = [
  {
    sno: 100,
    sname: "홍길동",
    score: 90,
    phone: "010-1111-1111",
    email: "hong@email.com",
  },
  {
    sno: 101,
    sname: "이순신",
    score: 95,
    phone: "010-2222-2222",
    email: "lee@email.com",
  },
  {
    sno: 102,
    sname: "유관순",
    score: 98,
    phone: "010-3333-3333",
    email: "you@email.com",
  },
  {
    sno: 103,
    sname: "박병관",
    score: 88,
    phone: "010-4444-4444",
    email: "park@email.com",
  },
  {
    sno: 104,
    sname: "김충식",
    score: 77,
    phone: "010-5555-5555",
    email: "kinc@email.com",
  },
];

// localStorage.setItem("students", JSON.stringify(students));

// location.href = 'form.html';
// location.reload();
// 비번 잘못되면 그 페이지 그대로 머물고 맞으면 form.html로 넘어가도록.
let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); //기본 동작 방지.
  let isExist = false; //아이디 존재여부 체크용 카운터
  let Id = document.querySelector("#userId").value; //입력한 아이디
  let pw = document.querySelector("#userPw").value; //입력한 비번
  if (!Id) {
    //아이디가 공란이면
    alert("아이디를 입력하세요");
    return;
  }
  // for (let i = 0; i < db.length; i++) {
  //   if (db[i].usrerId == Id) {
  //     isExist = true;
  //     if (db[i].password == pw) {
  //       location.href = "form.html";
  //     } else {
  //       alert("비번틀림.");
  //       document.querySelector("#userPw").value = null;
  //       return;
  //     }
  //   }
  // }

  db.forEach((elem) => {
    //forEach는 break 불가; for of문이나 for문 써야함.
    if (elem.usrerId == Id) {
      //아이디가 존재하면
      isExist = true;
      if (elem.password == pw) {
        //비밀번호도 일치하면
        if (!localStorage.getItem("students")) {
          localStorage.setItem("students", JSON.stringify(students));
        }
        location.href = "form.html"; //해당페이지로 이동
      } else {
        alert("비밀번호가 틀렸습니다. 다시 입력해주세요"); //아이디는 있지만 비번틀리면 알림.
        document.querySelector("#userPw").value = null; //비번칸 비우기.
        return; //돌아가기
      }
    }
  });
  if (!isExist) {
    //아이디가 일치하는게 하나도 없으면 false
    alert("존재하지 않는 아이디입니다."); //알리기.
    location.reload(); //화면새로고치기.
  }
});
