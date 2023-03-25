num1 = 0;
num2 = 0;
result = 0;
numbers = [1,2,3,4,5,6,7,8,9,0,'.']
function numShow(num){
    if(num in numbers){
        num1 = num;
        document.getElementById("result").textContent=num1;
    }
    if(num == '+'){
    Add();
    }
    else if(num == '-'){
        Subt();
    }
    else if(num == '*'){
        xply();
    }
    else if(num == '/'){
        divide();
    }
}

function Add() {
    num2 = document.getElementById("result").textContent;
    result = parseInt(num1)+parseInt(num2);
}

function Subt(){
    num2 = document.getElementById("result").textContent;
    num2 = document.getElementById("secondnumber").value;
    result=num1-num2;
}

function xply(){
    num2 = document.getElementById("result").textContent;
    num2 = document.getElementById("secondnumber").value;
    result=num1*num2;
}

function divide(){
    num2 = document.getElementById("result").textContent;
    num2 = document.getElementById("secondnumber").value;
    result=num1/num2;
}

function equals(){
    document.getElementById("result").textContent=result;

}

function clear(){
    document.getElementById("result").textContent = "";
}