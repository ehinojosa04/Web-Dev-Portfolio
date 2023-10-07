
/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};
 function fibonacci() {
     "use strict";
     var n = document.getElementById("num").value;
     var val = f(n);
     document.getElementById("fibonacciLbl").textContent = val;
     //return f;
 }

function f(n) {

    var value;
    // Check if the memory array already contains the requested number
    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        value=((Math.pow(1.618034,n))-(Math.pow(1-1.618034,n)))/Math.sqrt(5);
        memo[n] = value;
    }

    return Math.floor(value);
}

