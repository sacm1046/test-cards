const generateRamdonCards = () => {
    generateRandomSuite();
    generateRandomNumbers();
}

const colorRandom = suite => {
    document.getElementById('elementColor').classList.remove('elementColorRed');
    if (suite == '♦' || suite == '♥') {
        document.getElementById('elementColor').classList.add('elementColorRed');
    }
}

let generateRandomNumbers = () => {
    let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let iNumber = Math.floor(Math.random() * numbers.length);
    document.querySelector('.number').innerHTML = numbers[iNumber];
}
let generateRandomSuite = () => {
    let suite = ['♦', '♥', '♠', '♣'];
    let iSuite = Math.floor(Math.random() * suite.length);
    colorRandom(suite[iSuite]);
    document.getElementById('topSuite').innerHTML = suite[iSuite];
    document.getElementById('bottomSuite').innerHTML = suite[iSuite];
}

window.onload = () => {
    generateRamdonCards()
}

const btnNew = document.getElementById('btnNew');
btnNew.addEventListener('click', generateRamdonCards);
