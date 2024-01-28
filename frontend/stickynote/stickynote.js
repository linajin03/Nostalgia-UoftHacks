// call api 
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';


async function summarizeText ( inputText ) {
    const options = {
        method: 'POST',
        url: 'https://api.cohere.ai/v1/summarize',
        headers: {
          accept: 'application/json', 
        'content-type': 'application/json', 
        authorization: 'Bearer '},
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
const userInputText = "Ice cream is a sweetened. It is really sweet and tastes good. However, some people may be lactose intolerant. As a result, many people rely on alternative options instead. Ice cream is a sweetened. It is really sweet and tastes good. However, some people may be lactose intolerant. As a result, many people rely on alternative options instead. Ice cream is a sweetened. It is really sweet and tastes good. However, some people may be lactose intolerant. As a result, many people rely on alternative options instead."; // example from cohere

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

const title = ''  // add api call



getNotes().forEach((note) => {
    const noteElement = createNotes(note.id, note.content);
    notesContainer.insertBefore(noteElement, createNoteButton);
});



createNoteButton.addEventListener("click", () => addNotes()); // gets notified about when button is pressed

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
     

    element.addEventListener("change", () => {
        updateNotes(id, element.value); // updates the notes 
    });

    element.addEventListener("dblclick", () => {
        deleteNotes(id, element); // updates the notes 
    });

    dragElement(element);

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
function dragElement(element) {
    let offsetX, offsetY;

    element.addEventListener('mousedown', function (e) {
      offsetX = e.clientX - element.getBoundingClientRect().left;
      offsetY = e.clientY - element.getBoundingClientRect().top;

      document.addEventListener('mousemove', dragElement);
      document.addEventListener('mouseup', stopDragging);
    });

    function dragElement(e) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;

      element.style.left = x + 'px';
      element.style.top = y + 'px';
    }

    function stopDragging() {
      document.removeEventListener('mousemove', dragElement);
      document.removeEventListener('mouseup', stopDragging);
    }
  
}