const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
  const note = body;
  if (!Array.isArray(notesArray)) {
    notesArray = [];
  }
  if (notesArray.length === 0) {
    notesArray.push(0);
  }

  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
}

function deleteNote(id, notesArray) {
  for (let i = 0; i < notesArray.length; i++) {
    let note = notesArray[i];

    if (note.id == id) {
      notesArray.filter(i, 1);
      fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
      );
      break;
    }
  }
}

module.exports = { createNewNote, deleteNote };
