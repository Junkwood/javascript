// dom(document object model)
// noedes - element, text, attribute 노드.
let list = document.getElementById("list");
console.dir(list.childNodes[1]);
list.childNodes[1].innerHTML = "사과";
list.childNodes[1].onclick = function () {
  //eventhandler.
  alert("클릭됨.");
};

//tag name
let tags = document.getElementsByTagName("li");
console.log(tags);
for (let i = 0; i < tags.length; i++) {
  console.log(tags[i].innerText);
}

//class name
let classList = document.getElementsByClassName("fruit");
console.log(classList);

//queryselector
// document.querySelector("ul>li:nth-of-type(3)");
// document.querySelector("ul#list");//id로 찾기
let sel = document.querySelector("ul.list"); //class로 찾기.
console.log(sel);
