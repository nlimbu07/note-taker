const router = require('express').Router();
const notesRouters = require('./notesRoutes');

// middleware
router.use(notesRouters);

module.exports = router;
