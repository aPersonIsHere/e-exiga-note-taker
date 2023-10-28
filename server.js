const express = require('express');
const path = require('path');
const { consoleLog } = require('./middleware/console_log');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(consoleLog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

//GET Route for Notes
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//GET Route for Homepage
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);