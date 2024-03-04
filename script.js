
var n = 1;

function AddRow() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var address = document.getElementById("address").value;
    var age = document.getElementById("age").value;
    var addPI = document.getElementById("addP.I").value;
    var addTotal = document.getElementById("addTotal").value;
    var addDate = document.getElementById("addDate").value;

    var rowData = {
        fname: fname,
        lname: lname,
        address: address,
        age: age,
        addPI: addPI,
        addTotal: addTotal,
        addDate: addDate
    };

    // Save data to localStorage as JSON
    localStorage.setItem('row_' + n, JSON.stringify(rowData));

    // Render the row
    renderRow(rowData);

    n++;
}

function renderRow(rowData) {
    var AddRown = document.getElementById('show').getElementsByTagName('tbody')[0];
    var NewRow = AddRown.insertRow();

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
    var cel6 = NewRow.insertCell(5);
    var cel7 = NewRow.insertCell(6);
    var cel8 = NewRow.insertCell(7);

    cel1.innerHTML = rowData.fname;
    cel2.innerHTML = rowData.lname;
    cel3.innerHTML = rowData.address;
    cel4.innerHTML = rowData.age;
    cel5.innerHTML = rowData.addPI;
    cel6.innerHTML = rowData.addTotal;
    cel7.innerHTML = rowData.addDate;
    cel8.innerHTML = "<button onclick='deleteRow(this.parentNode.parentNode)'>Delete</button>";

    // Add fade-in animation
    NewRow.classList.add('fade-in');
    NewRow.classList.add('animate__animated', 'animate__fadeIn');
}

function deleteRow(row) {
    var rowIndex = row.rowIndex;
    document.getElementById("show").deleteRow(rowIndex);

    // Remove the corresponding data from localStorage
    localStorage.removeItem('row_' + rowIndex);
}

function ClearData() {
    localStorage.clear();
    document.getElementById('show').innerHTML = "";
    n = 1;
}

window.onload = function() {
    var keys = Object.keys(localStorage);
    keys.forEach(function(key) {
        if (key.startsWith('row_')) {
            var rowData = JSON.parse(localStorage.getItem(key));
            renderRow(rowData);
            n++;
        }
    });
}
