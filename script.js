function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(input) {
    document.getElementById('display').value += input;
}

function supp() {
    var display = document.getElementById('display').value;
    display = display.slice(0, -1);
    document.getElementById('display').value = display;
}

function sqrt() {
    var display = document.getElementById('display').value;
    display = Math.sqrt(display).toString();
    document.getElementById('display').value = display;
}

function calculate() {
    var display = document.getElementById('display').value;
    display = eval(display).toString();
    document.getElementById('display').value = display;
}