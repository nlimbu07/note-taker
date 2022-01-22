// Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(400).end();
// });

// Function that will start the Express.js server on port 3001
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
