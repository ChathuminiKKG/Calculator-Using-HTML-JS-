
function presentageSymbol(){
    document.getElementById("display01").value += '%';
}

function CE(){
    document.getElementById("display01").value = '';
}

function clearSymbol(){
    document.getElementById("display01").value = '';
}

function eraseSymbol(){
    let currentValue = document.getElementById("display01").value;
    document.getElementById("display01").value = currentValue.slice(0, -1);
}

function number7(){
    document.getElementById("display01").value += '7';
}

function number8(){
    document.getElementById("display01").value += '8';
}

function number9(){
    document.getElementById("display01").value += '9';
}

function multipleSymbol(){
    document.getElementById("display01").value += '*';
}

function number4(){
    document.getElementById("display01").value += '4';
} 

function number5(){
    document.getElementById("display01").value += '5';
}

function number6(){
    document.getElementById("display01").value += '6';
}

function minusSymbol(){
    document.getElementById("display01").value += '-';
}

function number1(){
    document.getElementById("display01").value += '1';
}

function number2(){
    document.getElementById("display01").value += '2';
}

function number3(){
    document.getElementById("display01").value += '3';
}

function plusSymbol(){
    document.getElementById("display01").value += '+';
}

function dotSymbol(){
    document.getElementById("display01").value += '.';
}

function number0(){
    document.getElementById("display01").value += '0';
}

function equalsSymbol(){
    let result = eval(document.getElementById("display01").value);
    document.getElementById("display01").value = result;
    // document.getElementById("display01").value += '=';
}

function divideSymbol(){
    document.getElementById("display01").value += '/';
}