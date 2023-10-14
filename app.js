'use strict';

const express = require('express')
const app = express();

const port = 3000;
const host = '74.249.50.71';

app.get('/', (req, res) => {
  res.send('Hello World from IBM Cloud Essentials!');
})

app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
