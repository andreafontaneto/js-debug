/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// funzione per verificare l'età (maggiorenne o minorenne)
// "message" può variare quindi deve essere un "let"
// nessun errore logico

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

// funzione che stampa il numero totale di colori nella palette
// "colors.length" deve essere salvato in una variabile PRIMA del console.log
// POI dal console.log tramite `` (template literal) richiamare la nuova variabile


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// funzione per stampare una somma
// "userNumber" deve essere uguale a parseInt(prompt('Inserisci un numero'))
// trasformando così il numero inserito da stringa a numero effettivo
// nessun errore logico


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// funzione per permettere l'accesso in base alla mail inserita
// restituisce "Accesso negato" perchè grantAccess è SEMPRE false 
// la variabile "grantAccess" è uguale (sia fuori che dentro all'if) ad un stringa 'true','false'
// e non ad un booleano true/false
// nessun errore logico


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = 'true';            
            
      }
        
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();

// funzione per verificare l'accesso in base alla mail inserita
// nel 1° IF posso scrivere " if (userEmail.length > 5 && email === userEmail)
// senza fare un 2° IF
// doppia ripetizione dell'if, per il resto è giusto





























