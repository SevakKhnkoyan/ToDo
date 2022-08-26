let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    let checkbox = document.createElement('input');
    let paragraph = document.createElement('p');
    let remove = document.createElement('div');

    paragraph.classList.add('paragraph-styling');
    checkbox.classList.add('checkbox-styling');
    remove.classList.add('remove');

    checkbox.type = "checkbox";
    paragraph.innerText = inputField.value;

    toDoContainer.appendChild(checkbox);
    toDoContainer.appendChild(paragraph);
    toDoContainer.appendChild(remove);

    inputField.value = "";
    remove.innerHTML = "X";

    checkbox.addEventListener('change', function(e) {
        if(e.target.checked) {
            paragraph.classList.add("line-through");
        } else {
            paragraph.classList.remove("line-through");
        }
    })
    paragraph.addEventListener('dblclick', function() {
        paragraph.contentEditable = true;
    })
    remove.addEventListener('click', function() {
        toDoContainer.removeChild(checkbox);
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(remove);
    })
})

