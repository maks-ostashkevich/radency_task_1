export default class NotesView {
    constructor(notesTable, categoriesCountsTable, archivedNotesTable, button, popupBox, {onNoteAdd, onNoteDelete, onNoteEdit, onNoteArchive} = {}) {
        this.notesTable = notesTable;
        this.categoriesCountsTable = categoriesCountsTable;
        this.archivedNotesTable = archivedNotesTable;
        this.button = button;
        this.popupBox = popupBox;

        this.onNoteAdd = onNoteAdd;
        this.onNoteDelete = onNoteDelete;
        this.onNoteEdit = onNoteEdit;
        this.onNoteArchive = onNoteArchive;

        this.editButton = popupBox.querySelector("#editButton");
        this.editButton.addEventListener('click', () => {

            this.onNoteAdd(popupBox.querySelector('#nameInput').value, new Date(), popupBox.querySelector('#contentInput').value);
            this.popupBox.classList.remove("show");
        });

        this.button.addEventListener('click', () => {
            this.popupBox.classList.add("show");
        });
    }

    updateTables(notes) {
        for (let i = this.notesTable.rows.length - 1; i > -1; --i) {
            this.notesTable.deleteRow(i); // 0 is a header
        }

        // Create an empty <thead> element and add it to the table:
        let header = this.notesTable.createTHead();
        let row = header.insertRow();
        let name = row.insertCell(0);
        name.innerHTML = "Name";
        let created = row.insertCell(1);
        created.innerHTML = "Created";
        let category = row.insertCell(2);
        category.innerHTML = "Category";
        let content = row.insertCell(3);
        content.innerHTML = "Content";
        let dates = row.insertCell(4);
        dates.innerHTML = "Dates";

        let editNote = row.insertCell(5);
        editNote.innerHTML = "";
        let archive = row.insertCell(6);
        archive.innerHTML = "<i class='fas fa-archive'></i>";
        let deleteTableRow = row.insertCell(7);
        deleteTableRow.innerHTML = "<i class='fas fa-trash'></i>";

        for (const note of notes) {
            let row = this.notesTable.insertRow(-1);
            let name = row.insertCell(0);
            name.innerHTML = note.name;
            let created = row.insertCell(1);
            created.innerHTML = note.created;
            let category = row.insertCell(2);
            category.innerHTML = note.category;
            let content = row.insertCell(3);
            content.innerHTML = note.content;
            let dates = row.insertCell(4);
            dates.innerHTML = note.dates;

            let editNote = row.insertCell(5);
            editNote.innerHTML = "<i class='fas fa-pen'></i>";
            let archive = row.insertCell(6);
            archive.innerHTML = "<i class='fas fa-archive'></i>";
            let deleteTableRow = row.insertCell(7);
            deleteTableRow.innerHTML = "<i class='fas fa-trash'></i>";
            deleteTableRow.addEventListener("click", () => {
                // alert("cell clicked");
                // get cell row number - ?
                let deleteTableRowRowIndex = row.rowIndex;
                this.notesTable.deleteRow(deleteTableRowRowIndex - 1);
                this.onNoteDelete(deleteTableRowRowIndex - 1);
                console.log(deleteTableRowRowIndex - 1);
            });
            // пока что удаляем без вопроса с меню выбора
        }
    }


}