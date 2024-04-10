const express = require('express');
const bodyParser = require('body-parser')
const pool = require('./dbpool');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      res.status(500).send(error.message);
      return;
    }

    res.json(results);
  });
});

app.get('/menu', (req, res) => {
  pool.query('SELECT * FROM menus', (error, results, fields) => {
    if (error) {
      res.status(500).send(error.message);
      return;
    }

    res.json(results);
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  pool.query('SELECT * FROM users WHERE email = ? and password = ?', [email, password], (error, result) => {
    if (error) {
      res.status(500).send('Internal server error');
    }

    if (result.length === 0) {
      res.send('Invalid email or password');
      return;
    }

  });
})

app.post('/register', (req, res) => {
  const { name, surname, email, password, phone, displayName } = req.body;

  pool.getConnection((err, connection) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    connection.query('INSERT INTO users (name, surname, email, password, phone, display_name) VALUES (?,?,?,?,?,?)', [name, surname, email, password, phone, displayName], (error, result) => {
      connection.release();

      if (error) {
        return res.status(500).send(error.message);
      }

      res.status(201).json('sucessful');

    });
  })

});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});