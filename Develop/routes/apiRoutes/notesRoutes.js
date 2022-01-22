const express = require('express');
const router = express.Router();
const {
  filterByQuery,
  findById,
  createNewNote,
  validateNote,
} = require('../../lib/notes');
const notes = require('../../lib/notes');

// Get notes
router.get('/notes', (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

// Get sinlge note
router.get('/notes/:id', (req, res) => {
  let result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// Create note
router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();
  console.log(notes);

  // if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;
