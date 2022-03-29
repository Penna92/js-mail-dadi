// lista di chi può accedere
const lista = ["giacomo@email.it", "carlo@email.it", "peppe@email.it", "nonna@email.it", "carla@email.it", "clara@email.it", "peppina@email.it", "pippo@email.it", "pluto@email.it", "paperino@email.it"];

// chiedere all'utente la propria e-mail
let userEmail = prompt("Scrivi la tua e-mail:");

//verificare che sia nella lista di chi può accedere
if(lista.includes(userEmail)){
    alert("e-mail valida!")
} else{
    alert("la tua e-mail non risulta valida: prova a ridigitarla correttamente")
}



