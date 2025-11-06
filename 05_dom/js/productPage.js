//
// <option vlaue = "전자기기">전자기기</option>

const categories = [];

for (let product of products) {
  if (!categories.includes(product.category)) {
    //includes는 있으면true 없으면false
    categories.push(product.category);
  }
}

//카테고리 셀렉트 옵션생성

let select = document.querySelector("select.categories");

for (let category of categories) {
  let opt = document.createElement("option");
  opt.value = category;
  opt.innerText = category;
  select.appendChild(opt);
}

//상품 목록을 화면에 출력.

let target = document.querySelector("tbody");

function showProductList(productAry = []) {
  target.innerHTML = "";
  //값이 안들어오면 []기준처리.
  const fields = ["productCode", "productName", "purchasePrice", "category"];
  let totalProduct = productAry;

  for (let product of totalProduct) {
    //상품갯수만큼 반복
    let tr = document.createElement("tr");

    for (let field of fields) {
      let td = document.createElement("td");
      td.innerText = product[field];
      tr.appendChild(td);
    }

    target.appendChild(tr);
  }
}

showProductList(products);

//페이지 이벤트

document.querySelector("div.pagination").addEventListener("click", (e) => {
  let pagingProducts = [];

  if (e.target.nodeName == "A") {
    page = e.target.innerText;
    if (!Number(page)) {
      return;
    }
    let start = 0,
      end = 0;
    start = (page - 1) * 5;
    end = page * 5;

    for (let i = start; i < end; i++) {
      pagingProducts.push(products[i]); //5개씩 배열에 담기
    }
    showPagingList();
    showProductList(pagingProducts);
  }
});

// category select 이벤트

let categorySelect = document.querySelector("select");
categorySelect.addEventListener("change", (e) => {
  const category = e.target.value;
  const filterProduct = [];
  for (let product of products) {
    if (product.category == category || category == "All") {
      filterProduct.push(product);
    }
  }
  showProductList(filterProduct);
});

//페이징 목록 생성함수

let page = 1;
let pagination = document.querySelector("div.pagination");

function showPagingList(totalCount = 50) {
  pagination.innerHTML = "";
  let startPage = 0,
    endPage = 0;
  let prev = false,
    next = false;

  // 시작, 마지막 페이지.

  endPage = Math.ceil(page / 5) * 5;
  startPage = endPage - 4;
  let realEnd = Math.ceil(totalCount / 5);

  if (endPage > realEnd) {
    endPage = realEnd;
  }

  //이전, 이후 페이지

  if (startPage != 1) {
    prev = true;
  }

  if (endPage < realEnd) {
    next = true;
  }

  //a태그 만들기
  //이전페이지 만들기

  let tag = document.createElement("a");
  tag.innerHTML = "&laquo";
  tag.href = "#";
  tag.className = "disabled";
  pagination.appendChild(tag);

  if (prev) {
    tag.className = "";
  }

  //숫자페이지 만들기

  for (let p = startPage; p <= endPage; p++) {
    let tag = document.createElement("a");
    tag.innerText = p;
    tag.href = "#";

    //현재페이지 active 클래스 부여.

    if (p == page) {
      tag.className = "active";
    }
    pagination.appendChild(tag);
  }

  //이후페이지 만들기

  tag = document.createElement("a");
  tag.innerHTML = "&raquo";
  tag.href = "#";
  tag.className = "disabled";
  pagination.appendChild(tag);

  if (next) {
    tag.className = "";
  }
}

showPagingList();
//조회버튼 이벤트
// document.querySelector("div.search").addEventListener("change", (e) => {
//   console.log(e.target.value);
//   const filterProduct = [];
//   const category = e.target.value;
//   for (let product of products) {
//     if (product.category == category) {
//       filterProduct.push(product);
//     }
//   }
//   console.log(filterProduct);
// });

// document.querySelector("div.search").addEventListener("change", (e) => {
//   console.log(e.target.value);
//   let prodName = document.querySelector("input[type=text]").value;
//   let cat = document.querySelector("select.categories").value;
//   document.querySelector("tbody").innerHTML = "";
//   for (let product of products) {
//     const fields = ["productCode", "productName", "purchasePrice", "category"];

//     if (product.category == cat) {
//       if (product.productName.indexOf(prodName) >= 0) {
//         let tr = document.createElement("tr");
//         for (let field of fields) {
//           let td = document.createElement("td");
//           td.innerText = product[field];
//           tr.appendChild(td);
//           document.querySelector("tbody").appendChild(tr);
//         }
//       }
//     }
//   }
// });
