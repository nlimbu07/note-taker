const fs = require('fs');
const path = require('path');

function filterByQuery(query, notes) {
  let filteredResults = notes;

  if (query.title) {
    filteredResults = filteredResults.filter(
      (note) => note.tittle === query.tittle
    );
  }
  return filteredResults;
}

function findById(id, notes) {
  const result = notes.filter((note) => note.id === id)[0];
  return result;
}

function createNewNote(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes }, null, 2)
  );
  return note;
}

function validateNotes(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  return true;
}

module.exports = { filterByQuery, findById, createNewNote, validateNotes };
