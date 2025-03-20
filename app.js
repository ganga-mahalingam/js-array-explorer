function getArray(){
     input=document.getElementById("array").value;
    return input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
}

function displayResult(result){
    document.getElementById("output").textContent= `Result: ${result}`;
}
function even(){
    const numbers=getArray();
    const evenNumbers=numbers.filter(number => number%2===0);
    displayResult(evenNumbers.join(', '));
}

function odd(){
    const numbers=getArray();
    const oddNumbers=numbers.filter(number => number%2!==0);
    displayResult(oddNumbers.join(', '));
}
function max() {
    const numbers = getArray();
    const maxNumber = Math.max(...numbers);
    displayResult(maxNumber);
}

function min() {
    const numbers = getArray();
    const minNumber = Math.min(...numbers);
    displayResult(minNumber);
}

function rev() {
    const numbers = getArray();
    const reversedNumbers = numbers.reverse();
    displayResult(reversedNumbers.join(', '));
}
