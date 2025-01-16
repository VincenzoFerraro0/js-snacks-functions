/* Scrivi una funzione che accetti un array di nomi e
restituisca nuovo un array con le iniziali di ogni parola dell'array fornito
     MINI TASK
     -Dichiariamo una variabile vuota che dovrà contenere il nuovo array
     -Creiamo un funzione e come parametro inpostiamo il valore che successivamente vogliamo verificare
        - Creiamo un ciclo che analizza l'array names
            -Dichiariamo una nuova variabile che conterrà il metodo per estrarre la prima lettera
            -salviamo nel nuovo array la variabile precedente
        - come risultato ci darà il nuovo array
*/

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let nuovoArray = [];

console.log(names)
// Dichiara la funzione qui.
function primaLettera(nomi) {
    for (let i = 0; i < nomi.length; i++) {
        let iniziale = nomi[i].slice(0, 1);
        nuovoArray.push(iniziale)
    }
    return nuovoArray
}
// Invoca la funzione qui e stampa il risultato in console


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(primaLettera(names))