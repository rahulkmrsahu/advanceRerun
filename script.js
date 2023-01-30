let input = document.getElementById('enter-items');
let button = document.getElementById('add-item')
let ul = document.querySelector("ul")
let lis = document.querySelector("li")
let deleteButton;



function inputLength() {
    return input.value.length;
}



function createDeleteButton(parent) {

    let button = document.createElement("button");

    button.appendChild(document.createTextNode("Delete"))

    button.className = "delete"


    parent.appendChild(button)


}

function toggleDoneClass() {
    this.classList.toggle("done")
}

function createListElement() {
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))


    ul.appendChild(li)

    createDeleteButton(li)

    deleteButton = document.querySelectorAll(".delete")

    updateDeleteButton()

    li.addEventListener('click', toggleDoneClass)

    input.value = ""
}


function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement()
    }
}

function AddListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement()
    }
}

function updateDeleteButton() {
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", function () {
            this.parentNode.remove()
        })
    }
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", AddListAfterKeypress)

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", toggleDoneClass)

    createDeleteButton(lis[i])
}

deleteButton = document.querySelectorAll(".delete")

updateDeleteButton()









