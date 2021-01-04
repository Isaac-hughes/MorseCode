const button = document.querySelector('.run');
const resultBox = document.querySelector('.resultText')

button.addEventListener('click', () => {
    morseCode();
});

let morseCodeArray = {".-": "A","-...": "B","-.-.": "C","-..": "D",".": "E","..-.": "F","--.": "G","....": "H","..": "I",".---": "J","-.-": "K",".-..": "L","--": "M","-.": "N","---": "O",".--.": "P","--.-": "Q",".-.": "R","...": "S","-": "T","..-": "U","...-": "V",
".--": "W","-..-": "X","-.--": "Y","--..": "Z","-----": "0",".----": "1","..---": "2","...--": "3","....-": "4",".....": "5","-....": "6","--...": "7","---..": "8","----.": "9","/": " "};

let inputVal = '';
let inputArray = [];
let letterArray = [];
let result = '';

const getInputValue = () => {
    // Selecting the input element and get its value 
    inputVal = document.getElementById("myInput").value;
};

const morseCode = () => {
    resetEverything();
    getInputValue();
    morseSplit();
    compare();
    join();
    console.log(result);
    resultBox.innerHTML = `${result}`
    resultBox.style.visibility = "visible";
};

const morseSplit = () => {
    inputArray = inputVal.split(/(\s+)/);
};

const compare = () => {
    for (i in inputArray){
        if (inputArray[i] in morseCodeArray){
            letterArray.push(morseCodeArray[inputArray[i]]);
        }else{
            letterArray.push('?');
        };
    };
};

const join = () => {
    for (var i = 0; i < letterArray.length-1; ++i){
        if (letterArray[i] === '?' && letterArray[i++] !== '?'){
        } else if (letterArray[i] === '?' && letterArray[i++] === '?'){
            result = result + ' ';

        } else {
            result = result + letterArray[i];
        };
    }
}
const resetEverything = () => {
    inputVal = '';
    inputArray = [];
    letterArray = [];
    result = '';
}
// .... . .-.. .-.. ---  /  --. .- -. --.