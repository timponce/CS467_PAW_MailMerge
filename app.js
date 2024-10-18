const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Mail Merge App!');
});

module.exports = app;