let rezultati = document.getElementById("result");

function shkruajVleren(vlera) {
  rezultati.textContent += vlera;
}
function llogarit() {
  rezultati.textContent = eval(rezultati.textContent);
}

function fshiVleren() {
  rezultati.textContent = "";
}
