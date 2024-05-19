/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//I datatype in JavaScript sono dei dati che vengono assegnati nel linguaggio JavaScript.
//I principali tipi di datatype che vedremo sono:
//STRING: è una sequenza di caratteri che contengno generalmente testo. E' delimitata da "", '' o da backticks (queste offrono l'opportunità di inserire un altro "contenuto" all'interno della stringa tramite ${...});
//Es. 
const name = "Damilola";
//NUMBERS: sono semplicemente numeri, a cui possiamo applicare gli operatori JavaScript;
//Es. 
const age = 32;
//BOOLEAN: è un dato che darà sempre una risposta di tipo vero (true) o falso (false);
//Es. 
const isTrue = true;
//ARRAY: è un dato di tipo lista e può contenere stringhe, numeri, booleani. Esse vengono delimitate con le parentesi quadre;
//Es. 
const list = ["Damilola", 32, true];
//OBJECT: è un dato che rappresenta l'oggetto in cui all'interno delle parentesi graffe troviamo le sue proprietà;
//Es. 
const person = {
      name: "Damilola",
      age: 32,
      height: 184,
};
//UNDEFINED: è utilizzata per mostrare che un variabile non sia stata ancora definita;
//Es. 
const test = undefined;
//NULL: è utilizzato per dare un valore nullo ad una variabile;
//Es. 
const secondTest = null;

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//L'oggetto è un box dove possiamo trovari vari elementi che vanno a costituire una struttura unica. Esso è composto da una coppia si chiave-valore;
/*
ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const sum = 12+20
console.log(sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12 //usiamo let se vogliamo dare un valore alla variabile riassegnabile;
const y = 12 //usiamo const se vogliamo dare un valore non riassegnabile alla variabile;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Vedi riga 20
console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let subtract = 4-x;
console.log(subtract);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name1 = "john"
const name2 = "John"
const isEqual = name1 !== name2
console.log(isEqual)

