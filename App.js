import NotesView from "./NotesView.js"

export default class App {
    constructor(notesTable, categoriesCountsTable, archivedNotesTable, button, popupBox) {
        this.notes = [];

        this.view = new NotesView(notesTable, categoriesCountsTable, archivedNotesTable, button, popupBox, this._handlers());

        this._refreshNotes();
    }

    _refreshNotes() {
        this.view.updateTables(this.notes);
    }

    _formatDate(date) {
        let dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        console.log(mm)
        const yyyy = date.getFullYear();

        let monthName = "";

        switch(mm) {
            case "01": monthName = "January"; break;
            case "02": monthName = "February"; break;
            case "03": monthName = "March"; break;
            case "04": monthName = "April"; break;
            case "05": monthName = "May"; break;
            case "06": monthName = "June"; break;
            case "07": monthName = "July"; break;
            case "08": monthName = "August"; break;
            case "09": monthName = "September"; break;
            case "10": monthName = "October"; break;
            case "11": monthName = "November"; break;
            case "12": monthName = "December"; break;
            default: monthName = "error"
        }
        
        if (dd[0] == '0') {
            dd = dd[1];
        }

        const today = monthName + ' ' + dd + ',' + yyyy;
        
        return today;
    }

    _handlers() {
        return {
            onNoteAdd: (noteName, date, noteContent) => {
                let note = {name: noteName, created: this._formatDate(date), category: "none", content: noteContent, dates: []};
                this.notes.push(note);
                this._refreshNotes();
            },
            onNoteDelete: id => {
                this.notes = this.notes.filter();
            },
            onNoteEdit: () => {

            },
            onNoteArchive: () => {

            }
        };
    }
}