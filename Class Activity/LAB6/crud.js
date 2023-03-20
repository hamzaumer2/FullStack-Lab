let selectrow = null;

function onFormSubmit(){
    let formData = readFormData();
    if(selectrow==null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
}
function readFormData(){
    var formData = {};
    formData["name"]=document.getElementById("name").value;
    formData["city"]=document.getElementById("city").value;
    formData["age"]=document.getElementById("age").value;
    return formData;
}
function insertNewRecord(){
    let table = document.getElementById("emptyList").getElementsByTagName("tbody")[0];
    let newflow = table.insertRow(table.length);
    cell1 = newflow.insertCell(0);
    cell1.innerHTML=data.name;

    cell2 = newflow.insertCell(1);
    cell2.innerHTML=data.city;

    cell3 = newflow.insertCell(2);
    cell3.innerHTML=data.age;

    cell4 = newflow.insertCell(3);
    cell4.innerHTML=`<a onclick="onEdit()"></a>`;

    cell5 = newflow.insertCell(4);
    cell5.innerHTML=`<a onclick="onDelete()"></a>`;
}
function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("city").value = "";
    document.getElementById("age").value = "";
}
function onEdit(){
    selectrow = td.parentElement.parentElement;
    document.getElementById("name").value = selectrow.cells[0].innerHTML;
    document.getElementById("city").value = selectrow.cells[1].innerHTML;
    document.getElementById("age").value = selectrow.cells[2].innerHTML;
}
function updateRecord(){
    selectrow.cells[0].innerHTML = formData.name;
    selectrow.cells[1].innerHTML = formData.city;
    selectrow.cells[2].innerHTML = formData.age;
}
function onDelete(){
    if(confirm("Sure?")){
        row = td.parentElement.parentElement;
        document.getElementById("empList").deleteRow(row.rowIndex);
        resetForm();
    }
}