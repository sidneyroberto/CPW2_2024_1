const search = window.location.search;
console.log(search);
const params = new URLSearchParams(search);
console.log(params);

const deltaS = params.get("delta-s");
const deltaT = params.get("delta-t");
console.log(deltaS, deltaT);

const sValue = deltaS ? Number(deltaS) : NaN;
const tValue = deltaT ? Number(deltaT) : NaN;

const resultValueSpan = document.getElementById("result-value");

if (!isNaN(sValue) && !isNaN(tValue) && tValue !== 0) {
  const avgSpeed = sValue / tValue;
  resultValueSpan.innerText = `${avgSpeed.toFixed(2)} m/s`;
} else {
  resultValueSpan.innerText = "Valor indefinido (parâmetros inválidos";
}
