// promise2.js
// 비동기방식처리, XMLHttpRequest()
const xhtp = new XMLHttpRequest();
xhtp.open("get", "http://localhost:3000/posts");
xhtp.send();
xhtp.onload = function () {
  console.log(JSON.parse(xhtp.responseText));
  let data = JSON.parse(xhtp.responseText);
  let postId = data[0].id;
  const xhtp2 = new XMLHttpRequest();
  xhtp2.open("get", "http://localhost:3000/comments");
  xhtp2.send();
  xhtp2.onload = () => {
    let data2 = JSON.parse(xhtp2.responseText);
    let result = data2.filter((comment) => comment.postId == postId);
    console.log(result[0]);
  };
};
//위의 것을 대신하여 순차적으로 보여주기 위해 promise than으로 사용함.
