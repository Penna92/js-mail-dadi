const targetDiv = document.getElementById("hide");
const btn = document.getElementById("toggle");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
};

const lancioUtente = Math.floor(Math.random() * 6) + 1;
// console.log(lancioUtente)

const lancioPC = Math.floor(Math.random() * 6) + 1;
// console.log(lancioPC)

document.getElementById("punteggio-utente").innerHTML += lancioUtente;
document.getElementById("punteggio-PC").innerHTML += lancioPC;

if (lancioUtente > lancioPC) {
  // console.log("Complimenti, hai vinto!");
  document.getElementById("risultato").innerHTML += "Complimenti, hai vinto!";
} else if (lancioUtente < lancioPC) {
  // console.log("Peccato, hai perso!");
  document.getElementById("risultato").innerHTML += "Peccato, hai perso!";
} else {
  // console.log("Avete ottenuto lo stesso numero: la sfida è finita in parità!")
  document.getElementById("risultato").innerHTML +=
    "Avete ottenuto lo stesso numero: la sfida è finita in parità!";
}
