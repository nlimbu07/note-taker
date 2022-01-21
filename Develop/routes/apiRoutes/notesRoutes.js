const router = require('express').Router();
const {
  filterByQuery,
  findById,
  createNewNote,
  validateNotes,
} = require('../../lib/notes');
const { notes } = require('../../lib/notes');

router.get('/notes', (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get('/notes/:id', (req, res) => {
  let result = findById(req.params.id, notes);
  if (req.query) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.get('/notes', (req, res) => {
  req.body.id = notes.length.toString();

  if (!validateNotes(req.body)) {
    res.status(400).send('The notes is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;
