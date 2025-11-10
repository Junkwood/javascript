// promise.js
// pending(요청)/fulfilled(정상처리)/rejected(실패). then, catch

const promise = new Promise((resolve, reject) => {
  try {
    let num1 = 3 + 4;
    resolve(num1);
  } catch (err) {
    reject(err);
  }
});

// 동기/비동기 방식 처리
// setTimeout은 비동기 처리됨.
//일반적인 동기처리는 순차적으로 위에서부터 아래로 실행되나 비동기처리는 상관없이 병렬처리라 빨리처리된게 더 위로 올라옴.
function delayFunc(ms, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${message}`);
      resolve(`${message}`);
    }, ms);
  });
}

delayFunc(1000, "1번 작업 처리")
  .then(() => delayFunc(1500, "2번 작업 처리"))
  .then(() => delayFunc(2000, "3번 작업 처리"))
  .then(() => console.log("end of prog."));

promise
  .then((result) => {
    console.log("성공시:", result);
  })
  .catch((err) => {
    console.log("실패시:", err);
  });
// setTimeout(function () {
//   console.log("1번처리.");
//   setTimeout(function () {
//     console.log("2번처리.");
//     setTimeout(function () {
//       console.log("3번처리.");
//     }, 600);
//   }, 1500);
// }, 1000); //1초

console.log("end of prog.");
// fetch("http://localhost:3000/comments")
//   .then((resp) => {
//     return resp.json();
//   }) //정상적으로 작동하면 실행.
//   .then((result) => {
//     console.logg(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
