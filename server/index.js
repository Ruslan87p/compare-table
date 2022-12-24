const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const data = require('./db.json')

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
// app.use(bodyParser.json())
app.get('/', (req, res) => res.json(data))

app.listen(PORT, () => {
  console.log('Server running on localhost:' + PORT)
})


