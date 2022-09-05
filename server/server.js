//require dependencies and
const express = require('express');
const app = express();
const port = 3000;
const apiRoute = require('./routes/api');
const path = require('path');

//body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve client folders
app.use(express.static('../client'));

//set routes
app.use('/api', apiRoute);
app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

//global error handler

//port listener
app.listen(port);
console.log('Listening on port ' + port);

module.exports = app;
