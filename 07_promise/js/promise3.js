// promise3.js
// fetch -> then -> then -> then
// 게시글 목록.
// async, await
async function postList() {
  try {
    const result = await fetch("http://localhost:3000/posts"); //처리될떄 까지 기다리는 await.
    const data = await result.json(); // 자바스크립트 객체변경
    for (let { id, title, author } of data) {
      let li = document.createElement("li");
      li.setAttribute("id", id);
      let fields = [
        id,
        title,
        author,
        "<button class='delbtn' type='button'>삭제</button>",
      ];

      li.innerHTML = `${fields
        .map((elem) => "<span>" + elem + "</span>")
        .join(" ")}`;

      document.querySelector("#list").appendChild(li);
    }
  } catch (err) {
    console.log("예외발생:", err);
  }
  document.querySelectorAll(".delbtn").forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      let id = e.target.parentElement.parentElement.firstChild.innerText;
      e.target.parentElement.parentElement.remove();
      delist(id);
    });
  });
}
postList();

function delist(id) {
  fetch("http://localhost:3000/posts/" + id, {
    method: "delete",
  }).catch(function (err) {
    console.log(err);
  });
}
