let number = document.querySelector("#number");
let comment = document.querySelector(".comment");
let result;
let n = 3;
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.start();

//console.log(recognition);
recognition.interimResults = true;
recognition.addEventListener("result", (e) => {
  console.log(e);
  const msg = e.results[0][0].transcript;
  writeMessage(msg);
  chkMessage(msg);
  //console.log(msg);
});
result = Math.floor(Math.random() * 100);
function writeMessage(msg) {
  number.innerHTML = `You said : ${msg}`;
  //console.log(msg);
}
function chkMessage(msg) {
  if (msg >= 1 && msg <= 100) {
    matchMessage(msg);
  } else {
    comment.innerHTML = "This is not a valid number";
  }
}
function matchMessage(msg) {
  if (msg > result) {
    comment.innerHTML = "Choose a lower number";
  } else if (msg < result) {
    comment.innerHTML = "Choose a higher number";
  } else {
    comment.innerHTML = "You got this buddy &#127882!!!!";
  }
}

recognition.addEventListener("end", recognition.start);
// if (n === 2) {
//   alert("Two tries are left");
// } else if (n === 1) {
//   alert("One try is left");
// }
