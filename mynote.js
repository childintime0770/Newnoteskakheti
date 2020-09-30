let addButton = document.getElementById('addbut');
let maneTextarea = document.getElementById('txtarea');
let noteSaverButton = document.getElementById('notesaver');

let notelist = document.getElementById('list');
let note1;
let savedNote;
let firstWord; 


addButton.onclick = function() {
    maneTextarea.style.visibility = 'visible';
    noteSaverButton.style.visibility = 'visible';
    note1 = document.createElement('li');
    notelist.appendChild(note1);
    note1.setAttribute('class', 'saved')
    
}


noteSaverButton.onclick = function() {
    savedNote = maneTextarea.value;
    firstWord = savedNote.split(' ', 1);
    note1.textContent = firstWord;
    
}




