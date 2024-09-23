let currentNumber = '';
let previousNumber = '';
let operator = null;

// Fungsi untuk menambahkan angka ke layar
function appendNumber(number) {
    currentNumber += number;
    document.getElementById('screen').value = currentNumber;
}

// Fungsi untuk memilih operator matematika
function chooseOperator(selectedOperator) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operator = selectedOperator;
    previousNumber = currentNumber;
    currentNumber = '';
}

// Fungsi untuk menghitung hasil
function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    
    currentNumber = result;
    operator = null;
    previousNumber = '';
    document.getElementById('screen').value = currentNumber;
}

// Fungsi untuk membersihkan layar
function clearScreen() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    document.getElementById('screen').value = '';
}
