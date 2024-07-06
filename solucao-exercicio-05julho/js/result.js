const search = window.location.search;
const params = new URLSearchParams(search);

const sentence = params.get("sentence");

const $ = document.getElementById.bind(document);
let charCount = sentence.length;
let letterCount = 0;
let digitCount = 0;
let whiteSpaceCount = 0;
let punctCount = 0;

$("sentence").innerText = sentence;

for (let i in sentence) {
  const c = sentence.charAt(i);

  if ("abcdefghijklmnopqrstuvwxyz".includes(c.toLowerCase())) {
    letterCount++;
  }

  if ("0123456789".includes(c)) {
    digitCount++;
  }

  if (c === " ") {
    whiteSpaceCount++;
  }

  if (".!?:;,".includes(c)) {
    punctCount++;
  }
}

$("char-count").innerText = charCount;
$("letter-count").innerText = letterCount;
$("digit-count").innerText = digitCount;
$("white-space-count").innerText = whiteSpaceCount;
$("punct-count").innerText = punctCount;
