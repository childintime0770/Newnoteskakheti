let addButton = document.getElementById('addbut');
let mainTextarea = document.getElementById('txtarea');
let noteSaverButton = document.getElementById('notesaver');
let removeButton = document.getElementById('delbut');

let notelist = document.getElementById('list');
let noteElement;
let savedNote;
let firstWord;  
let dateSpan;
let selectedNote = null;
window.selectedNote = selectedNote;

let topDate = document.getElementById('topdate');

let notes = [];

function NoteObject(text) {
    this.id = Date.now();
    this.text = text;
}


getTime();

setInterval(() => {
    getTime();
}, 1000);

function getTime(){
    let presentTime = new Date();
    topDate.textContent = `${presentTime.toLocaleDateString()} ${presentTime.toLocaleTimeString()}`; 
}

function deleteNote() {
    if(selectedNote == null) {
        return;
    }
    notes = notes.filter(function(n){
       return n != selectedNote; 
    });
    console.log(selectedNote);
    document.getElementById(selectedNote.id).remove();
    clearTextarea();
}

function showTextarea() {
    mainTextarea.style.visibility = 'visible';
    noteSaverButton.style.visibility = 'visible';  
    mainTextarea.focus();
}

function clearTextarea() {
    mainTextarea.value = '';
    mainTextarea.style.visibility = 'hidden';
    noteSaverButton.style.visibility = 'hidden';
    selectedNote = null;
}

addButton.onclick = function(){
    mainTextarea.value = "";
    showTextarea();
    selectedNote = null;
}

function editNote(event){
    selectedNote = notes.find(function(n){
        return n.id == event.currentTarget.id;
    })
    mainTextarea.value = selectedNote.text;
    showTextarea();
}


noteSaverButton.onclick = function() {
    noteElement = document.createElement('li');
    notelist.appendChild(noteElement);
    noteElement.setAttribute('class', 'saved');
    noteElement.addEventListener('click', editNote);

    savedNote = mainTextarea.value;
    firstWord = savedNote.substring(0, 20) + '...'
    
    noteElement.textContent = firstWord;
    dateSpan = document.createElement('span');
    noteElement.appendChild(dateSpan);
    dateSpan.setAttribute('class', 'time');
    dateSpan.textContent = (new Date()).toLocaleTimeString();

    deleteNote();
    clearTextarea();
    
    const note = new NoteObject(savedNote);
    notes.push(note);
    console.log(notes);
    noteElement.id = note.id;
    
}

removeButton.addEventListener('click', deleteNote);





