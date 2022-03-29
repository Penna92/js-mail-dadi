// lista di chi può accedere
const lista = [
  "giacomo@email.it",
  "carlo@email.it",
  "peppe@email.it",
  "nonna@email.it",
  "carla@email.it",
  "clara@email.it",
  "peppina@email.it",
  "pippo@email.it",
  "pluto@email.it",
  "paperino@email.it",
];

// al click del bottone, verificare che l'e-mail inserita dall'utente faccia parte della lista di e-mail valide
const btn = document.getElementById("button");
btn.onclick = function () {
  let userEmail = document.getElementById("exampleInputEmail1").value;
  if (lista.includes(userEmail)) {
    alert("e-mail valida!");
  } else {
    alert(
      "la tua e-mail non risulta valida: prova a ridigitarla correttamente"
    );
  }
};
