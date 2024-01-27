const notesContainer = document.getElementById("home");
console.log(notesContainer);
//dragElement(notesContainer);

const createNoteButton = notesContainer.querySelector('.createNote'); // update w/ name of button in css or html

const title = ''  // add api call
const note = '' // api call

getNotes().forEach((note) => {
    const noteElement = createNotes(note.id, note.content);
    notesContainer.insertBefore(noteElement, createNoteButton);
});

createNoteButton.addEventListener("click", () => addNotes()); // gets notified about when button is pressed

function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes") || "[]")
}

function saveNotes(notes) {
    localStorage.setItem("stickynotes", JSON.stringify(notes)); // we can replace this with mongodb 
}

function createNotes(id, content) {
    const element = document.createElement("textarea");
    

    element.classList.add("note");
    element.value = content;
    element.placeholder = "empty note"; // should be replaced with api call 

    element.addEventListener("change", () => {
        updateNotes(id, element.value); // updates the notes 
    });

    element.addEventListener("dblclick", () => {
        deleteNotes(id, element); // updates the notes 
    });

    return element;
}

function addNotes() {
    const notes = getNotes();
    const noteNode = {
        id:  Math.floor(Math.random() * 10000), // generate random value
        content: ""
    };

    const noteElement = createNotes(noteNode.id, noteNode.content);
    notesContainer.insertBefore(noteElement, createNoteButton);
    console.log("added one more new item");

    notes.push(noteNode);
    saveNotes(notes);
}

function updateNotes(id, newEdits) {
    const notes = getNotes();
    const targetNote = notes.filter((note) => note.id == id)[0];

    targetNote.content = newEdits;
    saveNotes(notes);

}

function deleteNotes(id, element) {
    const notes = getNotes().filter((note) => note.id != id)[0];

    saveNotes(notes);
    notesContainer.removeChild(element);
}

// function dragElement(element){
//     var position1 = 0;
//     var position2 = 0;
//     var position3 = 0;
//     var position4 = 0;
//     if (document.getElementById(element.id)) {
//         document.getElementById(element.id).onmousedown = dragMouseDown;
//       } else {
//         element.onmousedown = dragMouseDown;
//       }
// }

// function dragMouseDown(e) {
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
