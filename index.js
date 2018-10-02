function equation(a, b, c) {
    var d = (b * b) - 4 * (a * c);
    var result;
    if (d < 0){
        result = "NO POSSIBLE SOLUTIONS"
        return(result);
    }
    else if (d === 0){
        result = "x = " + -b/(2*a);
        return(result);
    }
    else if (d > 0){
        result = "x1 = " + ((-b)+Math.sqrt(d))/(2*a) + "; x2 = " + ((-b)-Math.sqrt(d))/(2*a);
        return(result);
    }
}

function displayResult(){
    var a = document.getElementById('firstNumber').value;
    var b = document.getElementById('secondNumber').value;
    var c = document.getElementById('thirdNumber').value;
    var result;
    result = equation(a, b, c)
    alert(result);
}

function resetValues(){
    document.getElementById('firstNumber').value = null;
    document.getElementById('secondNumber').value = null;
    document.getElementById('thirdNumber').value = null;
}