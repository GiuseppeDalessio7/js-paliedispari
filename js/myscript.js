/*: Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.*/



let choiceEvenOrOdd = prompt('scegli pari o dispari')
choiceEvenOrOdd = document.getElementById("choiceUser").innerHTML = choiceEvenOrOdd


let choiceUserNumber = Number(prompt('inserisci un numero da 1 a 5'))
choiceUserNumber = document.getElementById("choiceNumber").innerHTML = choiceUserNumber


let pcNumber = generatoreNumeri();
pcNumber = document.getElementById("generator").innerHTML = generatoreNumeri()
// console.log('numero pc ' + pcNumber);

function generatoreNumeri() {
    return Math.floor(Math.random() * 5) + 1 ; 
}


function sommaNumeri(num1,num2) {
    const somma = num1 + num2 ; 
    return somma;           
}

let somma = sommaNumeri(pcNumber, choiceUserNumber)
somma = document.getElementById("add").innerHTML = somma
// console.log('La somma è ' + somma);

function pari_dispari(somma) {
    if (somma % 2 === 0){
        return "pari";
    }else{
        return "dispari";
        
    } 
    
}

let evenorodd = document.getElementById("pariDispari").innerHTML = pari_dispari(somma)
console.log(pari_dispari(somma));

if(pari_dispari === choiceEvenOrOdd){
    let resultGame = document.getElementById("resultChoice").innerHTML = 'You Win'   
}else {
    let resultGame = document.getElementById("resultChoice").innerHTML = 'You Lose'
   
}






