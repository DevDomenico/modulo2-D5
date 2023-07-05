/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
function crazySum(numero1, numero2) {
  if (numero1 === numero2) {
    return (numero1 + numero2) * 3;
  } else {
    return numero1 + numero2;
  }
}

console.log(crazySum(4, 4));   // Output: 24 (somma di 4 e 4 moltiplicata per 3)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
function boundary(numero) {
  if (numero >= 20 && numero <= 100) {
    return true;
  }
  else if (numero === 400) {
    return true;
  }
  else {
    return false;
  }
}
console.log(boundary(500));   //false




/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
function reverseString(stringa) {
  return stringa.split('').reverse().join('');
}
console.log(reverseString("DOMENICO"));
// La stringa viene convertita in un array di caratteri utilizzando il metodo split                
// Il metodo split('') suddivide la stringa in un array di caratteri separando ogni carattere
//L'array di caratteri viene invertito utilizzando il metodo reverse(). Il metodo reverse() inverte l'ordine degli elementi all'interno dell'array. 
//Infine, gli elementi dell'array vengono uniti di nuovo in una singola stringa utilizzando il metodo join



/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
function upperFirst(stringa) {
  const parole = stringa.split(" ");

  for (let i = 0; i < parole.length; i++) {
    parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
  }

  return parole.join(" ");
}

console.log(upperFirst("domenico zungri")); 

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
function giveMeRandom(n) {
  const randomArray = []; //array vuoto chiamato per memorizzare i numeri casuali.
  for (let i = 0; i < n; i++) {  // ciclo for che si ripete n volte, dove n è il numero passato come parametro alla funzione
    const randomNumber = Math.floor(Math.random() * 11); //viene generato un numero casuale utilizzando Math.random(), 
                                                          //che restituisce un numero compreso tra 0 e 1 (escluso 1)
                                         //Per ottenere un numero intero compreso tra 0 e 10, moltiplichiamo il numero casuale per 11 e utilizziamo Math.floor() per arrotondarlo verso il basso.
    randomArray.push(randomNumber); //Il numero casuale ottenuto viene quindi aggiunto all'array randomArray utilizzando il metodo push()
  }
  return randomArray;
}

console.log(giveMeRandom(5)); 
 

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2) {
  return (l1 * l2);
}

console.log(area(2, 3));




/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
function crazyDiff(numero) {
  let differenza = Math.abs(numero - 19); //differenza assoluta.  tramite math.abs fonisco un valore assoluto anche se il numero è inferiore a 19

  if (differenza > 19) {
    return differenza * 3;
  } else {
    return differenza;
  }
}
console.log(crazyDiff(50));
// 

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

// differenza tra metodo includes e startsWith visto nella soluzione? 

function codify(stringa) {
  if (stringa.includes('code')) {    //utilizzando il metodo includes(). Se la stringa contiene "code", la condizione viene valutata come vera.
    return stringa; //se la condizione if è vera,la funzione restituisce la stessa stringa senza apportare modifiche utilizzando return stringa.


  } else {  //Se la condizione if è falsa
    return 'code' + stringa; //viene creata una nuova stringa concatenando la parola "code" con la stringa originale utilizzando l'operatore di concatenazione +
  }
}

console.log(codify("domenico"));



/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
//
function check3and7(numero) {
  if (numero % 3 === 0 || numero % 7 === 0) {
    return true;
  } else {
    return false;
  }
}



/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/


function cutString(stringa) {
  return stringa.slice(1, stringa.length - 1); //restituisce una sottostringa che inizia dal secondo carattere (indice 1)
                                               // e termina all'ultimo carattere escluso (indice stringa.length - 1).
}
console.log(cutString("domenico"));


//FINE




 //esercizio 4 diversa soluzione ?
function upperFirst(stringa) {
  const parole = stringa.split(" ");

  for (let i = 0; i < parole.length; i++) {
    parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
  }

  return parole.join(" ");
}

console.log(upperFirst("domenico zungri")); 

