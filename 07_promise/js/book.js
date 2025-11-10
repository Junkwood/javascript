//book.js
const bookList = [
  {
    bookNo: "001",
    title: "모던 자바스크립트 기초",
    author: "김모던",
    price: 20000,
  },
  {
    bookNo: "002",
    title: "자바스크립트 핵심가이드",
    author: "알베르토",
    price: 22000,
  },
];
//페이지 로딩시 바로 실행.
function showBookList() {
  //기존목록 지우고
  document.querySelector("#list").innerHTML = "";
  //배열의 값만큼 화면 출력
  bookList.forEach((elem) => {
    let { bookNo, title, author, price } = elem;
    let fields = ['<input type="checkbox"/>', bookNo, title, author, price];
    let tr = document.createElement("tr");
    tr.innerHTML = `${fields
      .map((field) => "<td>" + field + "</td>")
      .join("")}`;

    document.querySelector("#list").appendChild(tr);
  });
}
showBookList();
//form에 submit 이벤트 등록
document
  .querySelector('form[name="addBook"]')
  .addEventListener("submit", (e) => {
    e.preventDefault();

    let bookNo = document.querySelector('input[name="bookNo"]').value;
    let title = document.querySelector('input[name="title"]').value;
    let author = document.querySelector('input[name="author"]').value;
    let price = document.querySelector('input[name="price"]').value;
    bookList.push({ bookNo, title, author, price });
    showBookList();
    document.querySelector('input[name="bookNo"]').value = "";
    document.querySelector('input[name="title"]').value = "";
    document.querySelector('input[name="author"]').value = "";
    document.querySelector('input[name="price"]').value = "";
  });
document
  .querySelectorAll('input[type="checkbox"]')[0]
  .addEventListener("click", (e) => {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((elem) => {
      if (e.target.checked == true) {
        elem.checked = true;
      } else {
        elem.checked = false;
      }
    });
  });
// for (let book of bookList) {
//   let tr = document.createElement("tr");
//   for (let prop in book) {
//     let td = document.createElement("td");
//     td.innerText = book[prop];
//     tr.appendChild(td);
//   }
//   document.querySelector("#list").appendChild(tr);
// }
