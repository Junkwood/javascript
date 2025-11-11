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
  {
    bookNo: "003",
    title: "이것이 자바다",
    author: "김자바",
    price: 30000,
  },
  {
    bookNo: "004",
    title: "저것도 자바다",
    author: "박자바",
    price: 18000,
  },
  {
    bookNo: "005",
    title: "이건 자바스크립트다",
    author: "박스크립트",
    price: 25000,
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

//첫번째 체크박스 클릭시 전체 체크박스 상태 변경 이벤트 등록
document
  .querySelector('thead input[type="checkbox"]')
  .addEventListener("click", (e) => {
    let checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    checkboxes.forEach((elem) => {
      if (e.target.checked == true) {
        elem.checked = true;
      } else {
        elem.checked = false;
      }
    });
  });

//tbody 체크상태에 따라 thead 체크여부 넣기.
let checks = document.querySelectorAll('tbody input[type="checkbox"]');
checks.forEach((elem) => {
  elem.addEventListener("change", (e) => {
    let headcheck = document.querySelector('thead input[type="checkbox"]');
    let cnt = 0; //체크된거 카운팅용
    for (let check of checks) {
      if (check.checked == true) {
        cnt++;
      }
    }
    if (cnt == checks.length) {
      headcheck.checked = true;
    } else {
      headcheck.checked = false;
    }
    // if (e.target.checked == false && headcheck.checked == true) {
    //   headcheck.checked = false;
    // } else if (e.target.checked == true && headcheck.checked == false) {
    //   let checked = true;
    //   for (let check of checks) {
    //     if (check.checked == false) {
    //       checked = false;
    //       return;
    //     }
    //   }
    //   if (checked == true) {
    //     headcheck.checked = true;
    //   }
    // }
  });
});
//선택삭제 이벤트.
document
  .querySelector('form button[type="button"]')
  .addEventListener("click", () => {
    let checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    checkboxes.forEach((elem) => {
      if (elem.checked == true) {
        elem.parentElement.parentElement.remove();
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
