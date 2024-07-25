/*Crea una funzione che controlli due parametri interi. Ritorna true se uno dei due è 50 o se la somma dei due è 50*/

function fifthySum(x, y) {
  if (x + y === 50 || x === 50 || y === 50) {
    return true;
  } else {
    return false;
  }
}

console.log(fifthySum(51, 34));

/*Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri
e ritorna la stringa modificata*/

function modifyString(string, numberPosition) {
  if (numberPosition < 0 || numberPosition >= string.length) {
    return string;
  }
  let newString =
    string.slice(0, numberPosition) + string.slice(numberPosition + 1);
  return newString;
}

console.log(modifyString("Parallelepipedo", 5));

/*Crea una funzione che controlli se due numeri siano comepresi tra 40 e 60 o tra 70 e 100. 
Ritorna true se rispecchiano queste condizioni
altrimenti ritorna false*/

function checker(a, b) {
  if (
    (a >= 40 || (a <= 60 && b >= 40) || b <= 60) &&
    (a >= 70 || (a <= 100 && b >= 70) || b >= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checker(50, 70));

/*Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "LOS" o "NEW", 
altrimenti ritorna false*/

function checkCities(city) {
  city = city.toLowerCase();
  if (city.includes("los") || city.includes("new")) {
    return city;
  } else {
    return false;
  }
}
console.log(checkCities("PALERMO"));

/*Creea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.*/


function sumArray(array) {
    let sum = 0; 
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum
}

console.log(sumArray([1,5,10,2,12]))

/*Crea una funzione che controlli che un array non contenga i numeri 1 o 3. Se non li contiene ritorna true, altrimenti ritorna false.*/

function checkArrayNumbers(array) {
    for (i = 0; i < array.length; i++) {
        if (array.includes(1) || array.includes(3)) {
            return false
        }else{
            return true
        }
    }    
}

console.log(checkArrayNumbers([2,5,10,2,12,3]))

/*Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
  Angolo Acuto: -90° ritorna Acuto
  Angolo Ottuso: tra i 90° e i 180° ritorna Ottuso
  Angolo Retto: 90° ritorna Retto
  Angolo Piatto: 180° ritorna Piatto*/



function calculateDeg2(angolo) {
    if (angolo < 90) {
        return "sono un angolo acuto"
    } else if (angolo >= 90 && angolo < 180) {
        return "sono un angolo ottuso"

    } else if (angolo === 90) {
        return "sono un angolo retto"
    } else if (angolo === 180) {
        return "sono un angolo piatto" 
    };
}

console.log(calculateDeg2(45));


//Operatore ternario
function calculateDeg1(angolo) {
  return angolo === 90 ? "sono un angolo retto" :
         angolo === 180 ? "sono un angolo piatto" :
         angolo < 90 ? "sono un angolo acuto" :
         angolo < 180 ? "sono un angolo ottuso" :
         "angolo non valido";
}

console.log(calculateDeg1(134));


/*Crea una funzione che crei un acronimo a partire da una frase. Es: fabbrica italiana automobile torino, deve ritornare fiat*/

function acronimo(phrase) {
    phrase = phrase.toLowerCase()
    return phrase.split(" ").map(word => word[0]).join("")
}

console.log(acronimo("Sei Un Caro Amico"));



//ESERCIZI EXTRA

/*Partendo da una stringa (passata come parametro), ritorna il carattere più usato della stringa stessa*/

function searchCommonLetter(string) {
  const letterFrequency = {};
  string = string.toLowerCase()

  // Conta la frequenza di ogni carattere
  for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      if (letterFrequency[letter]) {   // Controlla se il carattere corrente è già presente nell'oggetto ed incrementa se è di nuovo presente
          letterFrequency[letter]++;
      } else {
          letterFrequency[letter] = 1; // Controlla se il carattere non è presente e gli do come valore iniziale 1
      }
  }

  // trova il carattere con la frequenza massima
  let maxChar = '';
  let maxCount = 0;
  const maxChar2 = [];

  for (let letter in letterFrequency) {    //Usare il ciclo For In che itera tutte le proprietà espresse ordinatamente, uno dopo l'altro dell'oggetto
      if (letterFrequency[letter] > maxCount) {
          maxChar = letter;
          maxCount = letterFrequency[letter];
      }
  }

  for (let letter in letterFrequency) {   
    if (letterFrequency[letter] === maxCount && letter !== maxChar) {
        maxChar2.push(maxChar, letter)
    }
}

if (maxChar2.length > 0) {
  console.log(`I caratteri più usati sono ${maxChar2}`)
}else{
  console.log(`Il carattere più usato è: ${maxChar}`) ;
}
}
  
searchCommonLetter("Parallelepipedo");



/*Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. 
Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. 
Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.*/


const anagramWords = (string,string2) => {
  let newString = string.toLowerCase()
  let newString2 = string2.toLowerCase()
  return newString.split("").sort().join("") === newString2.split("").sort().join("")
}

console.log(anagramWords("carenti", "pasat"))


/*Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data*/



function findAnagrams(word, anagramsArray) {


  const correctAnagrams = anagramsArray.filter(function(w) {
      return anagramWords(word, w);
  });

  return correctAnagrams;
}

// Esempio di utilizzo


console.log(findAnagrams("carenti", ["recanti", "cartine", "cane", "elan", "nula"]));


/*Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.*/

function isPalindrome(string) {
  string = string.toLowerCase()
  const reverseString = string.split("").reverse().join("").toLowerCase()
  if(string === reverseString) {
    return true
  }else{
    return false
  }  
}

console.log(isPalindrome("anna"))

