const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');

const submitToDoButton = document.getElementById('submitToDoButton');

const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');
    console.log(deleteButtons);

    for (let i = 0; i < deleteButtons.length; i++){
        const element = deleteButtons[i];
        element.addEventListener("click", (e) => {
            // card that the bbutton was on
            const buttonClicked = e.target;
            const cardToDelete = buttonClicked.parentNode.parentNode;
            cardToDelete.remove();
        })
    }
}

const buildNewToDoCard = (toDo, notes) => {
    let domString = `<div class="card w-25 m-2">
    <div class="card-body">
        <h5 class="card-title">${toDo}</h5>
        <p class="card-text">${notes}</p>
        <button href="#" class="btn btn-danger deleteButton">Delete this Shit</button>
    </div>
    </div>`;
        // counter++;

    printToDom(domString, 'toDoCards');
    activateDeletes();
}

const printToDom = (stringToPrint, whereToPrint) => {
        document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

submitToDoButton.addEventListener("click", (e) => {
    e.preventDefault();

    buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
});