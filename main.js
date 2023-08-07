import App from "./App.js"
import NotesView from "./NotesView.js"

const notesTable = document.getElementById("notesTable");
const categoriesCountsTable = document.getElementById("categoriesCountsTable");
const archivedNotesTable = document.getElementById("archivedNotesTable");
const button = document.getElementById("button");
const popupBox = document.getElementById("popupBox");

const app = new App(notesTable, categoriesCountsTable, archivedNotesTable, button, popupBox);

