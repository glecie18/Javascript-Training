const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>I Love Treehouse!</h2>');
});

app.listen(3000);