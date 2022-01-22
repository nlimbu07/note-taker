const express = require('express');
const router = express.Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const notes = require('../../lib/notes');
const saveNotes = require('../../db/db.json');

// Get notes
router.get('/notes', (req, res) => {
  res.json(saveNotes.slice(1));
});

// Post note
router.post('/notes', (req, res) => {
  const note = createNewNote(req.body, saveNotes);
  res.json(note);
});

// Delete note
router.delete('/notes/:id', (req, res) => {
  deleteNote(req.params.id, saveNotes);
  res.json(true);
});

module.exports = router;
