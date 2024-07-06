const usernameInput = document.getElementById("username");

usernameInput.onchange = () => {
  console.log(`onchange: ${usernameInput.value}`);
};

usernameInput.onkeyup = () => {
  console.log(`onkeyup: ${usernameInput.value}`);
};

usernameInput.onkeydown = () => {
  console.log(`onkeydown: ${usernameInput.value}`);
};

let language = "eng";

const printResult = () => {
  const username = usernameInput.value;
  console.log(`oninput: ${usernameInput.value}`);

  let result = "";
  if (username) {
    switch (language) {
      case "eng":
        result = `Hi ${username}!`;
        break;
      case "pt":
        result = `Olá, ${username}!`;
        break;
      case "es":
        result = `Hola ${username}!`;
        break;
      default:
        result = "";
    }
  }
  document.getElementById("result").innerText = result;
};

document.getElementById("english").onclick = () => {
  language = "eng";
  printResult();
};

document.getElementById("portugues").onclick = () => {
  language = "pt";
  printResult();
};

document.getElementById("espanol").onclick = () => {
  language = "es";
  printResult();
};

usernameInput.oninput = () => {
  printResult();
};
