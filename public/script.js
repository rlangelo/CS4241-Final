"use strict";

document.getElementById("choose").addEventListener("click", chooseButton);
document.getElementById("authorButton").addEventListener("click", addAuthor);
document.getElementById("subButton").addEventListener("click", submitFunction);

function yearFunction() {
    document.getElementById("subButton").disabled = true;
    var currentYear = new Date().getFullYear();
    var sel = document.getElementById('year');
    
    var option1 = document.createElement('option');
    option1.appendChild(document.createTextNode(currentYear));
    option1.value = 'thisYear';
    sel.appendChild(option1);
    
    var seniors = currentYear + 1;
    var option2 = document.createElement('option');
    option2.appendChild(document.createTextNode(seniors));
    option2.value = 'seniorYear';
    sel.appendChild(option2);

    var juniors = seniors + 1;
    var option3 = document.createElement('option');
    option3.appendChild(document.createTextNode(juniors));
    option3.value = 'juniorYear';
    sel.appendChild(option3);
    
    var sophomores = juniors + 1;
    var option4 = document.createElement('option');
    option4.appendChild(document.createTextNode(sophomores));
    option4.value = 'sophomoreYear';
    sel.appendChild(option4);
    
    var freshmen = sophomores + 1;
    var option5 = document.createElement('option');
    option5.appendChild(document.createTextNode(freshmen));
    option5.value = 'freshmenYear';
    sel.appendChild(option5);
}


function submitFunction() {
    var e = document.getElementById("year");
    if(!document.getElementById("title").value || !document.getElementById("description").value)
    {
        console.log("error here");
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("nofile").style.visibility = "hidden";
    }
    else if(!document.getElementById("asset").value) {
        console.log("no, here!");
        document.getElementById("nofile").style.visibility = "visible";
        document.getElementById("error").style.visibility = "hidden";
    }
    else {
        document.getElementById("error").style.visibility = "hidden";
        document.getElementById("nofile").style.visibility = "hidden";
        parseTable(document.getElementById("author_table"));
        var submitButton = document.getElementById("submit_button");
        submitButton.click();
        window.alert("Submission Successful");
    }
}

function addAuthor() {
    var selection = document.getElementById("year");
    if (!document.getElementById("author").value || 
        !document.getElementById("username").value ||
         selection.options[selection.selectedIndex].value == "blank") {
        document.getElementById("error").style.visibility = "hidden";
        document.getElementById("nofile").style.visibility = "hidden";
        document.getElementById('autError').style.visibility = "visible";
    }
    else {
    document.getElementById("error").style.visibility = "hidden";
    document.getElementById("nofile").style.visibility = "hidden";
    document.getElementById('autError').style.visibility = "hidden";
    var table = document.getElementById("author_table");
    var row = table.insertRow(0);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    cell1.innerHTML = document.getElementById("author").value;
    cell2.innerHTML = document.getElementById("username").value;
    cell3.innerHTML = selection.options[selection.selectedIndex].text;
    document.getElementById("author").value = "";
    document.getElementById("username").value = "";
    selection.selectedIndex = "0";
    document.getElementById("subButton").disabled = false;
    document.getElementById("authorButton").value = "Add Another Author";
    }
}

function parseTable(theTable) {
    var tLength = theTable.rows.length;
    var selection = document.getElementById("year");
    if (tLength == 1) {
        document.getElementById("author").value = theTable.rows[0].cells[0].innerText;
        document.getElementById("username").value = theTable.rows[0].cells[1].innerText;
        var userYear = theTable.rows[0].cells[2].innerText;
        var field = document.createElement("input");
        field.setAttribute("type", "hidden");
        field.setAttribute("id", "gYear");
        field.setAttribute("name", "Graduation Year");
        field.setAttribute("value", userYear);
        selection.selectedIndex = "0";
        document.getElementById("mainform").appendChild(field);
        document.getElementById("mainform").removeChild(selection);
    }
    else {
        var name = "";
        var username = "";
        var year = "";
        var nameField;
        var userNameField;
        var yearField;
        for (var i=0;i<tLength;i++) {
            name = theTable.rows[i].cells[0].innerText;
            username = theTable.rows[i].cells[1].innerText;
            year = theTable.rows[i].cells[2].innerText;
            
            nameField = document.createElement("input");
            nameField.setAttribute("type", "hidden");
            nameField.setAttribute("name", "Author " + (i+1));
            nameField.setAttribute("value", name);
            document.getElementById("mainform").appendChild(nameField);
            
            userNameField = document.createElement("input");
            userNameField.setAttribute("type", "hidden");
            userNameField.setAttribute("name", "Username " + (i+1));
            userNameField.setAttribute("value", username);
            document.getElementById("mainform").appendChild(userNameField);
            
            yearField = document.createElement("input");
            yearField.setAttribute("type", "hidden");
            yearField.setAttribute("name", "Graduation Year " + (i+1));
            yearField.setAttribute("value", year);
            document.getElementById("mainform").appendChild(yearField);
            
        }
            
            document.getElementById("form1").removeChild(document.getElementById("year"));
            document.getElementById("form1").removeChild(document.getElementById("author"));
                document.getElementById("form1").removeChild(document.getElementById("username"));
    }
}

function chooseButton() {
    var e = document.getElementById("assetType");
    var value = e.options[e.selectedIndex].value;
    if (value == "na"){
        document.getElementById("chooseError").style.visibility = "visible";
    }
    else {
        document.getElementById("error").style.visibility = "hidden";
        document.getElementById("mainform").style.display = "block";
        return false;
    }
}


