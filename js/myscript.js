/*: Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.*/



// let choiceEvenOrOdd = prompt('scegli pari o dispari').toLowerCase()
// choiceEvenOrOdd = document.getElementById("choiceUser").innerHTML = choiceEvenOrOdd


// let choiceUserNumber = Number(prompt('inserisci un numero da 1 a 5'))
// choiceUserNumber = document.getElementById("choiceNumber").innerHTML = choiceUserNumber


// let pcNumber = generatoreNumeri();
// pcNumber = document.getElementById("generator").innerHTML = generatoreNumeri()
// // console.log('numero pc ' + pcNumber);

// function generatoreNumeri() {
//     return Math.floor(Math.random() * 5) + 1 ; 
// }


// function sommaNumeri(num1,num2) {
//     const somma = num1 + num2 ; 
//     return somma;           
// }

// let somma = sommaNumeri(pcNumber, choiceUserNumber)
// somma = document.getElementById("add").innerHTML = somma
// // console.log('La somma è ' + somma);

// function pari_dispari(somma) {
//     if (somma % 2 === 0){
//         return "pari";
//     }else{
//         return "dispari";

//     } 

// }

// let evenorodd = document.getElementById("pariDispari").innerHTML = pari_dispari(somma)
// // console.log(pari_dispari(somma));

// if(pari_dispari === choiceEvenOrOdd){
//     let resultGame = document.getElementById("resultChoice").innerHTML = 'You Win'   
// }else {
//     let resultGame = document.getElementById("resultChoice").innerHTML = 'You Lose'

// }



/*Palidroma
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma
 */

let userWord = prompt("Inserisci una parola")

let arraysplit = userWord.split('');
console.log(arraysplit);

let arrayreverse = arraysplit.reverse();
console.log(arrayreverse);

let invertArray = arraysplit.join('');
console.log(invertArray);


function palindroma(word1, word2) {
    const check = word1 == word2


    if (userWord == invertArray) {
        let verified = document.getElementById("yesOrNot").innerHTML = ("la parola è palindroma");
        return "palindroma"
        
    } else (userWord != invertArray)
    {
        let verified = document.getElementById("yesOrNot").innerHTML = ("la parola non è palindroma");
       return "non è palindroma"
       
    } 
    
}

let check = palindroma(userWord, invertArray)
console.log(check);
