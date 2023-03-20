function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        alert("Valid Email");
        document.form1.text1.focus();
        return true;
    }
    else{
        alert("Enter Valid Email");
        document.form1.text1.focus();
        return false;
    }
}