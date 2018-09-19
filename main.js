const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');

const submitToDoButton = document.getElementById('submitToDoButton');

const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    console.log(deleteButtons);

    for (let i = 0; i < deleteButtons.length; i++){
        const element = deleteButtons[i];
        element.addEventListener("click", () => {
            console.log("they clicked delete!!!");
        })
    }
}

const buildNewToDoCard = (toDo, notes) => {
    let domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${toDo}</h5>
        <p class="card-text">${notes}</p>
        <button href="#" class="btn btn-primary deletedButton">Delete this Shit</button>
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