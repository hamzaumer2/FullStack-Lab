function required(){
    var empty = document.forms["form1"]["text1"].value;
    if(empty = ""){
        alert("Please Input Value");
        return false;
    }
    else{
        alert("Accepted");
        return true;
    }
}