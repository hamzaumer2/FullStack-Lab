function Add() {
    num1 = document.getElementById("firstnumber").value;
    num2 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML=parseInt(num1)+parseInt(num2);
}

function Subtract() {
    num1 = document.getElementById("firstnumber").value;
    num2 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML=num1-num2;
}

function Multiply() {
    num1 = document.getElementById("firstnumber").value;
    num2 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML=num1*num2;
}

function Divide() {
    num1 = document.getElementById("firstnumber").value;
    num2 = document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML=num1/num2;
}   