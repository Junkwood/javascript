//
let students = JSON.parse(localStorage.getItem("students"));
//
students.forEach((elem) => {
  const data = [elem.sno, elem.sname, elem.score];
  let tr = makeRow(data);
  document.querySelector("#studentList").appendChild(tr);
});

document.querySelector("#addForm").addEventListener("submit", (e) => {
  e.preventDefault(); //form의 기본기능을 차단함.
  const sno = e.target.children[0].value;
  const sname = e.target.children[1].value;
  const score = e.target.children[2].value;
  const phone = e.target.children[3].value;
  const email = e.target.children[4].value;

  if (!sno || !sname || !score || !phone || !email) {
    alert("필수값 입력");
    return;
  }

  const inputs = [sno, sname, score];

  //localStorage에 값을 저장.
  students.push({
    sno: sno,
    sname: sname,
    score: score,
    phone: phone,
    email: email,
  });
  localStorage.setItem("students", JSON.stringify(students));

  let tr = makeRow(inputs);

  document.querySelector("#studentList").appendChild(tr);

  e.target.children[0].value = null;
  e.target.children[1].value = null;
  e.target.children[2].value = null;
});
function makeRow(inputs) {
  let tr = document.createElement("tr");
  tr.addEventListener("click", (e) => {
    console.log(e.target.parentElement.children[1].innerText);
    localStorage.setItem("sno", e.target.parentElement.children[0].innerText);
    localStorage.setItem("sname", e.target.parentElement.children[1].innerText);
    location.href = "student.html";
  });
  console.log(inputs);
  inputs.forEach((elem) => {
    let td = document.createElement("td");
    let txt = document.createTextNode(elem);
    td.appendChild(txt);
    tr.appendChild(td);
  });

  // 삭제버튼.
  let td = document.createElement("td");
  let btn = document.createElement("button");
  btn.innerText = "삭제";
  //클릭이벤트 등록.
  btn.addEventListener("click", (e) => {
    console.log(e.target.parentElement.parentElement.firstChild.innerText);
    if (confirm("삭제하겠습니까?")) {
      //팝업에서 확인누르면 true, 취소누르면 false 반환
      let idx = -1;
      idx = students.findIndex((student) => student.sno == inputs[0]);
      students.splice(idx, 1);
      localStorage.setItem("students", JSON.stringify(students));
      e.target.parentElement.parentElement.remove(); //parentElement는 상위요소
    }
  });
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}
