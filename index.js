
const express = require('express');
const mysql = require('mysql2');


const app = express();
const port = 3000;


app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12121212',
  database: 'my_database'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});


app.post('/add', (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO my_table (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err, result) => {
    if (err) {
      console.error('Error inserting record:', err);
      res.status(500).send('Error inserting record');
      return;
    }
    res.status(201).send('Record added successfully');
  });
});

app.get('/records', (req, res) => {
  const query = 'SELECT * FROM my_table';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching records:', err);
      res.status(500).send('Error fetching records');
      return;
    }
    res.status(200).json(results);
  });
});

app.get('/record/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM my_table WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error fetching record:', err);
      res.status(500).send('Error fetching record');
      return;
    }
    if (result.length === 0) {
      res.status(404).send('Record not found');
      return;
    }
    res.status(200).json(result[0]);
  });
});

app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const query = 'UPDATE my_table SET name = ?, email = ? WHERE id = ?';
  db.query(query, [name, email, id], (err, result) => {
    if (err) {
      console.error('Error updating record:', err);
      res.status(500).send('Error updating record');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('Record not found');
      return;
    }
    res.status(200).send('Record updated successfully');
  });
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM my_table WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting record:', err);
      res.status(500).send('Error deleting record');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('Record not found');
      return;
    }
    res.status(200).send('Record deleted successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
