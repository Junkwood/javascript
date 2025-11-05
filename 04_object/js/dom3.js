// dom3.js
// 이벤트 등록
document.querySelectorAll("#itemList>li").forEach((elem) => {
  console.log(elem);
  elem.addEventListener("mouseover", function () {
    let a = Math.floor(Math.random() * 17).toString(16);
    let b = Math.floor(Math.random() * 17).toString(16);
    let c = Math.floor(Math.random() * 17).toString(16);
    elem.style.color = "#" + a + b + c;
  });
  elem.addEventListener("mouseout", function () {
    elem.style.color = "";
  });
});

//추가. 순서
// 1. 추가버튼에 클릭이벤트 등록
// 2. input태그의 입력값
// 3. <li>Node.js</li> 생성.
// 4. ul태그의 하위요소로 등록.

document.querySelector("#addBtn").addEventListener("click", (e) => {
  console.log(e.target);
  let userValue = document.querySelector("#addInput").value;
  if (!userValue) {
    alert("값을 입력하세요");
    return;
  }
  let li = document.createElement("li");
  li.addEventListener("mouseover", () => {
    let a = Math.floor(Math.random() * 17).toString(16);
    let b = Math.floor(Math.random() * 17).toString(16);
    let c = Math.floor(Math.random() * 17).toString(16);
    li.style.color = "#" + a + b + c;
  });
  li.addEventListener("mouseout", () => (li.style.color = ""));
  let txt = document.createTextNode(userValue);
  li.appendChild(txt);
  console.log(li);
  document.querySelector("#itemList").appendChild(li);
  document.querySelector("#addInput").value = null;
});
