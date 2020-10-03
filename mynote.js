let addButton = document.getElementById('addbut'); // axali textareas gilaki
let mainTextarea = document.getElementById('txtarea'); //textarea
let noteSaverButton = document.getElementById('notesaver'); //shenaxvis gilaki
let removeButton = document.getElementById('delbut'); // amoshlis gilaki
noteSaverButton.disabled = true // shemnaxveli gilaki gatishulia
let notelist = document.getElementById('list'); // uli agebuli idit
let noteElement; // gamzadebulia listvis
let savedNote; // textareadan agebuli texstis hsesanaxad
let firstWord;  // pirveli 15 asos shesanaxad
let dateSpan; // listvis shenaxvis dros chasawerad
let selectedNote = null; // monishnuli noutis asagebad


let topDate = document.getElementById('topdate'); // tarigi da dro

let notes = []; // carieli array textis shesanaxad da idistvis

function NoteObject(text) {  // sawyisi obieqtistvis
    this.id = Date.now();
    this.text = text;
}


getTime();

setInterval(() => {
    getTime();
}, 1000);

function getTime(){ // drois funqcia romelic anaxlebs dros yovel wamshi
    let presentTime = new Date();
    topDate.textContent = `${presentTime.toLocaleDateString()} ${presentTime.toLocaleTimeString()}`; 
}

function deleteNote() { // lis wasashleli funqcia
    if(selectedNote == null) {
        return;
    }
    notes = notes.filter(function(n){
       return n != selectedNote; 
    });
    
    document.getElementById(selectedNote.id).remove(); 
    clearTextarea();
}

function showTextarea() {   //textareas gamochenis funqcia
    mainTextarea.style.visibility = 'visible';
    noteSaverButton.style.visibility = 'visible';  
    mainTextarea.focus();
}

function clearTextarea() {  // textareis damalvis funqcia
    mainTextarea.value = '';
    mainTextarea.style.visibility = 'hidden';
    noteSaverButton.style.visibility = 'hidden';
    selectedNote = null;
}

addButton.onclick = function(){ //moqmedeba damatebis gilakze funqcia
    mainTextarea.value = "";
    showTextarea();
    selectedNote = null;
}

function editNote(event){   // li-dan textis modzebna obieqtshi da misi textareashi gamotana
    selectedNote = notes.find(function(n){
        return n.id == event.currentTarget.id;
    })
    mainTextarea.value = selectedNote.text;
    showTextarea();
}

mainTextarea.addEventListener("keyup", function(){  //carieli textareas shemtxvevashi save-s gilakis gatishva da piriqit
    if(mainTextarea.value == "") {
        noteSaverButton.disabled = true;      
    } else {
        noteSaverButton.disabled = false;
    }
})



noteSaverButton.onclick = function() { // moqmedeba save gilakze dacheris shemdgom
    noteElement = document.createElement('li');
    notelist.appendChild(noteElement);
    noteElement.setAttribute('class', 'saved');
    noteElement.addEventListener('click', editNote);

    savedNote = mainTextarea.value;
    
    if(savedNote.length < 15){
        firstWord = savedNote;
    } else {
        firstWord = savedNote.substring(0, 15) + '...'
    }



    noteElement.textContent = firstWord;
    dateSpan = document.createElement('span');
    noteElement.appendChild(dateSpan);
    dateSpan.setAttribute('class', 'time');
    dateSpan.textContent = (new Date()).toLocaleTimeString();

    deleteNote();
    clearTextarea();
    
    const note = new NoteObject(savedNote);
    notes.push(note);
    noteElement.id = note.id;
}
        




removeButton.addEventListener('click', deleteNote); // roca editirebas vuketeb shenaxul texts inaxavs axalshi da shemdgom shlis dzvels


// p.s. GUJA shenaxuli noutebi isqroleba tu chamocda divs :D :D