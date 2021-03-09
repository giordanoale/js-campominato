// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// L’utente non può inserire più volte lo stesso numero.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

function campoMinato (num1,num2) {

  var bombe = [];
  var bomba;

  var i = 0;

  while (i < 16) {

    bomba = Math.floor(Math.random() * num2) + 1;

    if (!(bombe.includes(bomba))){
      bombe.push(bomba);
      i++
    }
  }

  console.log(bombe);
  console.log(bombe.length);



  var numeri = [];
  var utente;

  var j = 0;

  while (j < (num2 - 16) && !(bombe.includes(utente))) {

    utente = parseInt(prompt("Inserisci un numero da 1 a " + num2));

    if (bombe.includes(utente)) {

      console.log("BOOM!!! Hai trovato la bomba il tuo punteggio è " + (numeri.length * 100));

    } else if (!(numeri.includes(utente)) && !(isNaN(utente)) && !(utente < 1 || utente > num2)) {

      numeri.push(utente);
      j++

    }
    console.log(numeri);
  }


  console.log(numeri.length);

  if (j == (num2 - 16)) {
  console.log("Complimenti, hai vinto!");
  }
}

var difficolta;
var k = 0;

while (!(difficolta < 0 && difficolta > 2) && k < 1) {

  difficolta = parseInt(prompt("Scegli un livello difficoltà tra 0, 1 e 2"));

  if (difficolta == 0) {
    campoMinato(1,100);
    k++
  } else if (difficolta == 1) {
    campoMinato(1,80);
    k++
  } else if (difficolta == 2) {
    campoMinato(1,50);
    k++
  }

}
