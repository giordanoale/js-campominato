// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.

var bombe = [];
var bomba;

var i = 0;

while (i < 16) {

  bomba = Math.floor(Math.random() * 100) + 1;

  if (!(bombe.includes(bomba))){
    bombe.push(bomba);
    i++
  }
}

console.log(bombe);
console.log(bombe.length);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.

var numeri = [];
var utente;

var j = 0;

while (j < 10 && !(bombe.includes(utente))) {

  utente = parseInt(prompt("Inserisci un numero da 1 a 100"));

  if (bombe.includes(utente)) {

    console.log("Hai perso la partita!");

  } else if (!(numeri.includes(utente)) && !(isNaN(utente)) && !(utente < 1 || utente > 100)) {

    numeri.push(utente);
    j++

  }
  console.log(numeri);
}

console.log(numeri.length);
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// if (bombe.includes(utente)) {
//   console.log("Hai perso la partita!");
// } else if (!(numeri.includes(utente))) {
//   if (!(isNaN(utente))){
//     if (!(utente < 1 || utente > 100)){
//       numeri.push(utente);
//       j++;
//     }
//   }
// }
