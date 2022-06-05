// Create a new list item when clicking on the "Add" button
function addList() {
    var task = document.getElementById('myInput').value;

    var check = document.getElementById('myInput').value;

    var emp = ('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'+"  " + " -" + " ");

    if (check == "") {
        alert("Enter The Task First");
        return true;
    }

    var listItem = document.createElement("li");

    var checkbox = document.createElement("input")

    checkbox.type = "checkbox";

    listItem.appendChild(checkbox);

    var itemText = document.createTextNode(task);

    listItem.appendChild(itemText);

    var itemText = document.createTextNode(emp);

    listItem.appendChild(itemText);

    var d = new Date();

    itemText.after(d.toLocaleString());

    document.getElementById('myUL').appendChild(listItem);

    document.getElementById('myInput').value = '';

}

// Deleting the checked item when cheked on the "Del" button
function deleteCheckBox() {

    var ul = document.getElementById('myUL');

    var li = ul.children;
    
    for (var i = 0; i < li.length; i++) {
        while (li[i] && li[i].children[0].checked) {
            ul.removeChild(li[i]);
        }
    }
}
