//dom2.js
let target = document.querySelector("div>ul");
console.log(target.innerHTML);
console.log(target.innerText);
console.log(target.textContent);

//이미지 클릭 이벤트.
let width = 150;
document.querySelector("img").onclick = function (e) {
  width += 30;
  console.dir((e.target.style.backgroundColor = "red"));
  let no = Math.ceil(Math.random() * 4);
  e.target.src = "images/" + no + ".jpg";
  e.target.width = width;
  e.target.height = width;
};
