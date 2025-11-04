//date객체
//년, 월 달력 출력.
// let year = 2020;
// let month = 10;
// let now = new Date(); //Date객체.

// console.log(now.getMonth()); //getmonth는 1월을 0으로 취급하여 실제 월로 치환시 -1해야함.
// now.setFullYear(year);
// now.setMonth(month - 1); //1월이 0으로 시작하니까 구할 월 -1;
// now.setDate(1); //1보다 하루전날은 0임.
// let spaces = now.getDay();
// // 11월, 30일.

// console.log(now.getDay()); //요일정보를 가져옴.일요일이 0, 월요일이 1임.
// console.log(now);

// // 달력(말일이 언제인지,1일의 요일정보)
// let calStr = `<table border='1'><caption>${year}년${month}월</caption><thead><tr>`; //테이블선언 및 캡션.
let dayAry = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; //첫줄에 넣을 요일.

// now.setMonth(month); //말일구하기 위해 다음월로 세팅.
// now.setDate(0); //0일로 하면 전월말일이 됨.
// let lastDate = now.getDate(); //마지막날짜 계산

// //요일출력
// for (let i = 0; i < dayAry.length; i++) {
//   calStr += `<th>${dayAry[i]}</th>`;
// }
// calStr += "</tr></thead><tbody><tr>";

// //첫주 공백처리
// for (let s = 0; s < spaces; s++) {
//   calStr += "<td></td>";
// }
// for (let d = 1; d <= lastDate; d++) {
//   //날짜출력
//   calStr += `<td>${d}</td>`;
//   if ((d + spaces) % 7 == 0) {
//     calStr += "</tr><tr>"; //줄바꿈.
//   }
// }
// calStr += "</tr></tbody>";
// calStr += "</table>";

// document.writeln(calStr);

//숙제.
//함수로 만들어보기 drawCalendar(yyyy,mm)
function drawCalendar(yyyy, mm) {
  let date = new Date();
  date.setFullYear(yyyy);
  date.setMonth(mm - 1);
  date.setDate(1);
  let space = date.getDay();
  let cal = `<table border='1'><caption>${yyyy}년${mm}월</caption><thead><tr>`;
  for (let i = 0; i < dayAry.length; i++) {
    cal += `<th>${dayAry[i]}</th>`;
  }
  date.setDate(mm);
  date.setDate(0);
  last = date.getDate();
  cal += "</tr></thead><tbody><tr>";
  for (let s = 0; s < space; s++) {
    cal += `<td></td>`;
  }
  for (let d = 1; d <= last; d++) {
    cal += `<td>${d}</td>`;
    if ((d + space) % 7 == 0) {
      cal += `</tr><tr>`;
    }
  }
  cal += `</tr></tbody></table>`;
  document.writeln(cal);
}
drawCalendar(prompt("몇년?"), prompt("몇월?"));
