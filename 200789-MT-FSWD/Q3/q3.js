let selectRow = null;

function onFormSubmit() {
    let data = read();
    insert(data);
    resetForm();
}
function read() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["age"] = document.getElementById("age").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("q3").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell3 = newRow.insertCell(1);
    cell3.innerHTML = data.age;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.city;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onclick="onEdit(this)">Edit</a>`;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onclick="onDelete(this)">Delete</a>`;
}
function onDelete(data) {
    if (confirm("Are you want to delete this record ?")) {
        row = data.parentElement.parentElement;
        document.getElementById("q3").deleteRow(row.rowIndex);
        resetForm();
    }
}

function onEdit(data) {
    selectRow = data.parentElement.parentElement;
    document.getElementById("name").value = selectRow.cells[0].innerHTML;
    document.getElementById("age").value = selectRow.cells[2].innerHTML;
    document.getElementById("city").value = selectRow.cells[1].innerHTML;
}

function onDelete(td) {
    if (confirm("Are you want to delete this record ?")) {
        row = td.parentElement.parentElement;
        document.getElementById("q3").deleteRow(row.rowIndex);
        resetForm();
    }
}