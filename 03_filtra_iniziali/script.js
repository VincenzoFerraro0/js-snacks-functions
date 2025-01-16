/* Scrivi una funzione che accetti un'array di stringhe
 e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera 
    MINI TASK
      - Dichiariamo una variabile array vuota 
      - creiamo una funzione filtraParola con i parametri che vogliamo verificare "nomi" "lettera"
      - Creiamo un ciclo che analizza l'array
      - dichiariamo una variabile che trasforma i singoli "nomi" in stringa
      - creiamo una condizione che controlla se la prima lettera dei nomi è uguale al parametro "lettera"
         - allora salviamo il risultato nella variabile vuota
      - come risultato ci darà il nuovo array
      - Stampiamo e invochiamo la funzione con i parametri che ci occorono
 */


const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let nuovoArray = [];

function filtraParola(nomi, lettera) {
  for (let i = 0; i < nomi.length; i++) {
    // trasformiamo l'array in stringa
    let parola = nomi[i];
    // Controlla se la parola inizia con la lettera specificata
    if (parola.charAt(0).toLowerCase() === lettera.toLowerCase()) {
      nuovoArray.push(parola);
    }
  }
  
  return nuovoArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filtraParola(names, "a"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
