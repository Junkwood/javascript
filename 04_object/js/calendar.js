//dom제어.

let yyyy = 2025,
  mm = 11;
document.querySelector('input[name="yyyy"]').addEventListener("change", (e) => {
  yyyy = e.target.value;
  showCalendar(yyyy, mm);
});
document.querySelector('input[name="mm"]').addEventListener("change", (e) => {
  mm = e.target.value;
  showCalendar(yyyy, mm);
});
//thead부분
function showHeader() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let tr = document.createElement("tr");
  for (let day of days) {
    let th = document.createElement("th");
    th.innerText = day;
    if (day == "Sun") {
      th.className = "sunday";
    } else if (day == "Sat") {
      th.className = "saturday";
    }
    tr.appendChild(th);
  } //
  document.querySelector("table>thead").appendChild(tr);
}
showHeader();

function showCalendar(year, month) {
  // console.log(year, month);
  let date = new Date();
  date.setFullYear(yyyy);
  date.setMonth(mm - 1);
  date.setDate(1);
  let space = date.getDay();
  //기존달력 삭제
  document.querySelector("table>tbody").innerHTML = "";
  //tbody
  tr = document.createElement("tr");
  for (let s = 0; s < space; s++) {
    let td = document.createElement("td");
    tr.appendChild(td);
  }
  console.log(tr);
  for (let d = 1; d <= 30; d++) {
    let td = document.createElement("td");
    td.innerText = d;
    tr.appendChild(td);
    //새로운 tr
    if ((space + d) % 7 == 0) {
      td.className = "saturday";
      document.querySelector("table>tbody").appendChild(tr);
      tr = document.createElement("tr");
    } else if ((space + d) % 7 == 1) {
      td.className = "sunday";
    }
    document.querySelector("table>tbody").appendChild(tr);
  }
}

showCalendar(yyyy, mm);
