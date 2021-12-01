
const gameNumbersQuantity = 5;
const randomNumbers = getRandomNumbersArray(gameNumbersQuantity);

//visualizzare i 5 numeri con alert
randomNumbers.forEach((singleRandomNumber) => {
    alert(singleRandomNumber);
})

//fare 5 prompt dove l'utente inserisce un numero da mettere in un array, dopo 30 secondi

setTimeout(startGame, 3000);


function startGame(){
    const userNumberArray = [];
    for (let i = 0; i < gameNumbersQuantity; i++){
        const userNumber = parseInt( prompt ('Dimmi un numero se te lo ricordi'));
        userNumberArray.push(userNumber);
        console.log(userNumberArray)
    }
}
// FUNZIONI //

//genera un array di numeri casuali non ripetuti
// numberOfItems --> numero che rappresenta i numeri dentro l'array

//result  -> array di numeri casuali
function getRandomNumbersArray (numberOfItems){
    const numbersArray = [];
    while(numbersArray.length < numberOfItems){
        const newRandomNumber = getRndInteger (1, 100);
        if(!numbersArray.includes(newRandomNumber)){
        }
    }
    const guessNumbers = userNumberArray.filter((singleRandomNumber)=>{
        return randomNumbers.includes(singleRandomNumber);
    })
    console.log(guessNumbers)
    
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}