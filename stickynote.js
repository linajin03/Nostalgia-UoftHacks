// call api 
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

window.onbeforeunload = function () { // makes sure screen goes to the top 
  window.scrollTo(0, 0);
}

async function summarizeText ( inputText ) {
    const options = {
        method: 'POST',
        url: 'https://api.cohere.ai/v1/summarize',
        headers: {
          accept: 'application/json', 
        'content-type': 'application/json', 
        authorization: 'Bearer mUf7LULz96DtLuekcvXidal3MtJ9OeyOekluhHQz'},
        data: {text: inputText, length: 'short', format: 'bullets', extractiveness: 'low', temperature: 0.3}
      };
      
      var result = null;
      try {
        const response = await axios.request(options);
        //console.log(response.data);
        return response.data.summary;
      } catch (error) {
        console.error(error);
        throw error; 
      }

}
const userInputText = "This booklet contains information about how to prepare, where to find food and refreshments, a list of workshops and meetups, and key contact information. We wish every hacker the very best during this weekend, and if you require assistance during the weekend of, please visit the Help Desk on the first floor."; // example from cohere

var result = null;

async function run() {
  try {
    result = await summarizeText(userInputText);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

run();



const notesContainer = document.getElementById("home");
console.log(notesContainer);


const createNoteButton = notesContainer.querySelector('.createNote'); // update w/ name of button in css or html


getNotes().forEach((note) => {
    const noteElement = createNotes(note.id, note.content);
    notesContainer.insertBefore(noteElement, createNoteButton);
});


createNoteButton.addEventListener("click", () => createNotes()); // gets notified about when button is pressed

function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes") || "[]" );
}

function saveNotes(notes) {
    localStorage.setItem("stickynotes", JSON.stringify(notes)); // we can replace this with mongodb 
}

function createNotes(id, content) {
    const element = document.createElement("div");
    element.classList.add("note_box");
    const note = document.createElement("textarea");
    note.classList.add("note");
    note.value = result; // should be replaced with api call 


    element.appendChild(note);
    document.body.appendChild(element);

    const colours = ["#A9EDF1", "#FEFF9C", "#FF7EB9", "#FFC14A"];

    const random = Math.floor(Math.random() * colours.length);
    note.style.backgroundColor = colours[random];
    element.style.top = window.scrollY +'px';
     
    draggingElement(element);

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
    console.log(targetNote.content);

    targetNote.content = newEdits;
    saveNotes(notes);

}

function deleteNotes(id, element) {
    const notes = getNotes().filter((note) => note.id != id);

    saveNotes(notes);
    notesContainer.removeChild(element);
}

// makes elements draggable
function draggingElement(element) {
    let offsetX, offsetY;

    element.addEventListener('mousedown', function (e) {
      const rect = element.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      console.log(offsetY);

      document.addEventListener('mousemove', dragElement);
      document.addEventListener('mouseup', stopDragging);
    });

    function dragElement(e) {
      const x = e.clientX - offsetX
      const y = e.clientY - offsetY;
      element.style.transform = `translate(${x}px, ${y}px)`;
    }

    function stopDragging() {
      document.removeEventListener('mousemove', dragElement);
      document.removeEventListener('mouseup', stopDragging);
    }
  
}