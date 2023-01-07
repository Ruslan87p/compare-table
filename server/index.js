const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');



const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'users',
  port: 3306
});

db.connect(err => {
  if(err) {
    console.log(err, 'Error something wrong with connection')
  }
  console.log('Database correct connected')
});



// const data = require('./db.json')

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
// app.use(bodyParser.json())
// app.get('/', (req, res) => res.json(data))

app.get('/users', (req, res) => {
  const qr = `select * from user`;
  db.query(qr, (err, result) => {
    if(err) {
      console.log(err, 'Error')
    }

    if (result.length > 0) {
      res.send({
        message: "all users",
        data: result
      })
    }
  })
})

app.listen(PORT, () => {
  console.log('Server running on localhost:' + PORT)
})


