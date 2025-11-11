let items = [];
let addbtn = document.querySelector("#add");
addbtn.addEventListener("click", () => {
  let item = document.querySelector("#item");

  //빈 값이 입력될 경우 알림.
  if (item.value == "") {
    alert("아무것도 입력되지 않았습니다.");
    return;
  }
  //중복 체크
  let check = false;
  items.forEach((ele) => {
    if (ele == item.value) {
      check = true;
    }
  });
  if (check) {
    alert("이미 리스트에 있는 값입니다.");
    return;
  }
  //아이템을 배열에 추가
  items.push(item.value);
  item.value = "";
  item.focus();
  showList();
});
const itemList = document.querySelector("#itemList");
//배열에 있는 아이템들을 화면에 보여주는 거
function showList() {
  itemList.innerHTML = "";
  let ul = document.createElement("ul");
  items.forEach((ele) => {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = ele;
    li.appendChild(span);
    ul.appendChild(li);
  });
  itemList.appendChild(ul);
  //x표시 만들고 x누르면 배열에서 제거 및 제거된 뒤의 배열로 다시 화면표시.
  let list = document.getElementsByTagName("li");
  for (let i = 0; i < list.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.addEventListener("click", (e) => {
      items.splice(
        items.indexOf(e.target.parentElement.firstChild.innerText),
        1
      );
      showList();
    });
    span.className = "close";
    span.appendChild(txt);
    list[i].appendChild(span);
  }
}
showList();
