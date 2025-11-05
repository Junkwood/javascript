//
const students = [
  { sno: 100, sname: "홍길동", score: 90 },
  { sno: 101, sname: "이순신", score: 95 },
  { sno: 102, sname: "유관순", score: 98 },
  { sno: 103, sname: "박병관", score: 88 },
  { sno: 104, sname: "김충식", score: 77 },
];

students.forEach((elem) => {
  const data = [elem.sno, elem.sname, elem.score];
  let tr = makeRow(data);
  document.querySelector("#studentList").appendChild(tr);
});

document.querySelector("#addForm").addEventListener("submit", (e) => {
  e.preventDefault(); //form의 기본기능을 차단함.
  const num = e.target.children[0].value;
  const name = e.target.children[1].value;
  const score = e.target.children[2].value;

  if (!num || !name || !score) {
    alert("필수값 입력");
    return;
  }

  const inputs = [num, name, score];
  let tr = makeRow(inputs);

  document.querySelector("#studentList").appendChild(tr);

  e.target.children[0].value = null;
  e.target.children[1].value = null;
  e.target.children[2].value = null;
});
function makeRow(inputs) {
  let tr = document.createElement("tr");

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
    if (confirm("삭제하겠습니까?")) {
      //팝업에서 확인누르면 true, 취소누르면 false 반환
      e.target.parentElement.parentElement.remove(); //parentElement는 상위요소
    }
  });
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}
