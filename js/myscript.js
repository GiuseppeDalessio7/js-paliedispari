/*: Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.*/



let choiceEvenOrOdd = prompt('scegli pari o dispari')
console.log(choiceEvenOrOdd);

let choiceUserNumber = Number(prompt('inserisci un numero da 1 a 5'))
console.log(choiceUserNumber);

const pcNumber = Math.floor(Math.random() * 5) + 1 ; 
console.log(pcNumber);

function sommaNumeri(num1,num2) {
    const somma = pcNumber + choiceUserNumber ; 
    return console.log('la somma è ' + somma);
            
}

const somma = sommaNumeri(pcNumber, choiceUserNumber)

function pari_dispari() {
    if (somma % 2 === 0){
        console.log('la somma è pari');
    }else{
        console.log('la somma è dispari')
    } 
    return(console.log(somma));
}





