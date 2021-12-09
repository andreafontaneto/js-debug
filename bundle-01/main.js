/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

// con il ciclo FOR si crea un iterazione della variabile "i" che è uguale a 0
// nessun errore di sintassi
// l'errore è che "i" deve essere minore di 5 per far partire l'incremento


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}

// funzione che aggiunge un parametro "num" solo se pari
// l'errore di sintassi è l'uguale = (singolo) anzichè == (doppio) oppure === (triplo)
// aggiungendo 5 non potrà mai essere pari


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

// ciclo per l'iterazione di una variabile "i"
// errore di sintassi sono le virgole , anzichè i punti e virgola ;
// nessun errore di logica


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// funzione per mostrare solo i numeri pari contenuti nell'array "numbers"

// errori di sintassi: 
/*
    - l'array "numbers" è una const non un let

    - "let i = 1" perchè così si toglie lo 0 (zero) dal return

    - "- 1" (meno 1) dopo numbers.length può essere tolto 
      diventando " i <= numbers.length " per recuperare tutti i numeri

    - ";" (punto e virgola) dopo i++

    - "=" (uguale singolo) nella condizione dell'if

    - ";" (punto e virgola) dopo la condizione dell'if

    - "return" alla fine non serve perchè .push() fa già lui il return 
*/ 