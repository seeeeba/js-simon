
const gameNumbersQuantity = 5;
const randomNumbers = getRandomNumbersArray(gameNumbersQuantity);

//visualizzare i 5 numeri con alert
randomNumbers.forEach((singleRandomNumber) =>{
    alert(singleRandomNumber)
})

//fare 5 prompt dove l'utente inserisce un numero da mettere in un array, dopo 30 secondi

setTimeout(startGame, 3000);


function startGame(){
    const userNumberArray = [];
    for (let i = 0; i < gameNumbersQuantity; i++){
        const userNumber = parseInt( prompt ('Dimmi un numero se te lo ricordi'));
        userNumberArray.push(userNumber);
        
    }

    console.log(userNumberArray);

    const guessNumbers = [];
    const wrongNumbers = [];

    userNumberArray.forEach((singleRandomNumber) => {
        if(randomNumbers.includes(singleRandomNumber) && !guessNumbers.includes(singleRandomNumber)){
            guessNumbers.push(singleRandomNumber);
        } else{
            wrongNumbers.push(singleRandomNumber);
        }
    })

    console.log(guessNumbers);
    console.log(wrongNumbers);

    if(!guessNumbers.length === 1){
        alert(`caro utente hai azzeccato ${guessNumbers.length} numero. Il numero é: ${guessNumbers}`)
    } else {
        alert(`Caro utente hai azzeccato ${guessNumbers.length} numeri. I numeri sono: ${guessNumbers}`)
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
        console.log(newRandomNumber)
        if(!numbersArray.includes(newRandomNumber)){
            numbersArray.push(newRandomNumber)
        }
    }
    
    return numbersArray;
    
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}