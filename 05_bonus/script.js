/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)

    MINI TASK
        -Creare una funzione che accetti name e hour come parametri e calcoli il saluto in base all'ora.
        -Usare l'operatore ternario per determinare il messaggio:   "? :" / "if, else if, else"
            -Buongiorno per le ore ≤ 13.
                -Buon pomeriggio per le ore ≤ 17.
                    -Buonasera per le ore > 17.

        -stampiamo richiamando la funzione
*/


const Name = 'Mario';

// Dichiara la funzione qui.
const salutoDinamico = (name, hour) => {
    let saluto = (hour <= 13) ? 'Buongiorno' :
        (hour <= 17) ? 'Buon pomeriggio':
        'Buonasera';


    return `${saluto} ${name}.`
};


// Invoca la funzione qui e stampa il risultato in console
console.log(salutoDinamico(Name, 20));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.