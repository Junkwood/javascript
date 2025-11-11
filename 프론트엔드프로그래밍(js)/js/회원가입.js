const form = document.getElementById("register");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = e.target[0].value;
  const email = e.target[1].value;
  const pw = e.target[2].value;
  const pwck = e.target[3].value;
  //d아이디 길이 체크
  console.log(id.length);
  if (id.length < 4 || id.length > 15) {
    alert("아이디의 길이는 4~15자리입니다. 다시 입력해주세요.");
    e.target[0].focus();
    return;
  }
  //패스워드 길이체크
  if (pw.length < 8) {
    alert("비밀번호는 8자리 이상 입력해주셔야합니다. 다시 입력해주세요.");
    e.target[2].focus();
    return;
  }
  //패스워드 일치여부 체크
  if (pwck != pw) {
    alert("위에 입력한 비밀번호와 일치하지 않습니다.");
    e.target[3].value = "";
    e.target[3].focus();
    return;
  }
});
