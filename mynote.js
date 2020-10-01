let addButton = document.getElementById('addbut');
let maneTextarea = document.getElementById('txtarea');
let noteSaverButton = document.getElementById('notesaver');

let notelist = document.getElementById('list');
let note1;
let savedNote;
let firstWord;  
let dateParagraph;
let presentTime = new Date(); 


addButton.onclick = function() {
    maneTextarea.style.visibility = 'visible';
    noteSaverButton.style.visibility = 'visible';
    note1 = document.createElement('li');
    notelist.appendChild(note1);
    note1.setAttribute('class', 'saved');
    
}


noteSaverButton.onclick = function() {
    savedNote = maneTextarea.value;
    firstWord = savedNote.split('\n', 1)[0];
    note1.textContent = firstWord;
    dateParagraph = document.createElement('p');
    note1.appendChild(dateParagraph);
    dateParagraph.setAttribute('class', 'time');
    


}




