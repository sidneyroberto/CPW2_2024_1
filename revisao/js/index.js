const divArea1 = document.getElementById("area1");
divArea1.innerHTML = "<span id='texto1'>Oi!</span>";
const texto1 = document.getElementById("texto1");

console.log(texto1.innerText);
texto1.innerText = "Fala, galera!";
console.log(texto1.innerText);

divArea1.style.margin = "50px auto";
divArea1.style.width = "400px";
divArea1.style.padding = "20px";
divArea1.style.backgroundColor = "#000";

texto1.style.fontFamily = "Arial";
texto1.style.color = "#fff";
texto1.style.fontSize = "28px";
texto1.style.display = "block";
texto1.style.textAlign = "center";

const colors = ["cyan", "black", "orange", "blue", "green", "purple"];

divArea1.onmouseover = () => {
  const index = Math.floor(Math.random() * colors.length);
  console.log(index);
  divArea1.style.backgroundColor = colors[index];
};
