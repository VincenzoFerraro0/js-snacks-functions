/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno
    MINI TASK
        - Dichiariamo una variabile con le vocali
        - Dichiariamo una variabile il numero di strat pari a 0
        - Creiamo una funzione con il parametro da controllare
        - creiamo un ciclo che analizza la stringa
        - creiamo una condizione che verifica se la variabile vocali è inclusa nel parametro 
        - stampiamo e invochiamo la funzione con il parametro adeguato
*/

const word = 'javascript';
let vocali = ['a', 'e', 'i', 'o', 'u'];
let numeroVocali = 0;

// Dichiara la funzione qui.
function contaVocali(parola){
    parola = parola.toLowerCase(); // il parametro inserito diventa tutto minuscolo 
    for (let i = 0; i < parola.length; i++) {
        if (vocali.includes(parola[i])) {
          numeroVocali++;
        }
    }
    return numeroVocali
}

console.log(contaVocali(word));

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)