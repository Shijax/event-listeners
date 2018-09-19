const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');

const submitToDoButton = document.getElementById('submitToDoButton');

const buildNewToDoCard = (toDo, notes) => {
    let domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${toDo}</h5>
        <p class="card-text">${notes}</p>
        <a href="#" class="btn btn-primary">Go Somewhere</a>
    </div>
    </div>`;

    printToDom(domString, 'toDoCards');
}

const printToDom = (stringToPrint, whereToPrint) => {
        document.getElementById(whereToPrint).innerHTML += stringToPrint;
}




submitToDoButton.addEventListener("click", (e) => {
    e.preventDefault();

    buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
});