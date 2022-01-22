// central hub to pull notes files
const express = require('express');
const router = express.Router();

// Express middleware
router.use(require('./notesRoutes'));

module.exports = router;
