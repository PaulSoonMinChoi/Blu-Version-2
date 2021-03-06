const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 5000;

const dbHelpers = require('../database/dbHelpers');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/userUsername', (req, res) => {
  dbHelpers.getUserUsername(req.query.username, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
})

app.get('/api/userEmail', (req, res) => {
  dbHelpers.getUserEmail(req.query.email, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  })
})

app.post('/api/postUser', (req, res) => {
  dbHelpers.signUpUser(req.body, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('Successful post to users!')
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));