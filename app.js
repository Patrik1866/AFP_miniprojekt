const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const session = require('express-session');

// Create a MySQL database connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'viccportal_db',
});

app.use(session({
  secret: ' ',
  resave: false,
  saveUninitialized: false,
}));

app.get('/', async (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  res.sendFile(path.join(__dirname, 'Public', 'Home.html'));
});

app.get('/', async (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  res.sendFile(path.join(__dirname, 'Public', 'MainPage.html'));
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

// Serve static files (HTML and CSS)
app.use(express.static('Public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function displayPopupMessage(message) {
	console.log('\x1b[36m%s\x1b[0m', '== Popup Message =='); // Add styling (optional)
	console.log(message);
	console.log('===================');
  }
// Handle form submissions
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Insert the form data into the database
  const sql = 'INSERT INTO viccportal (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('User registered successfully');
      res.redirect('Home.html?registerSuccess=true');
    }
	
  });
});

app.post('/login', (req, res) => {
	const { username, password } = req.body;
  const randomNumber = Math.random();
	// Query the database to check if the user exists
	const sql = 'SELECT * FROM viccportal WHERE username = ? AND password = ?';
	db.query(sql, [username, password], (err, results) => {
	  if (err) {
		console.error(err);
		res.status(500).send('Internal server error');
	  } else if (results.length === 0) {
		res.redirect('Home.html?loginSuccess=false'); // User not found or incorrect password
	  } else {
		// User is authenticated
		console.log('User login successful')
		res.redirect('MainPage.html?loginSuccess=true');
	  }
	});
});

app.post('/logout', (req, res) => {
  // Clear the user session to perform logout
  req.session.destroy((err) => {
      if (err) {
          console.error('Logout error:', err);
          res.json({ success: false, message: 'An error occurred during logout' });
      } else {
        res.json({ success: true, message: 'Success' });
      }
  });
});

app.post('/vicc_add', (req, res) => {
  const { vicc_kateg, vicc_input } = req.body;

  // Insert the form data into the database
  const sql = 'INSERT INTO viccek (kategoria, vicc_tartalom) VALUES (?, ?)';
  db.query(sql, [vicc_kateg, vicc_input], (err, result) => {
    if (err) {
      console.error(err);
      res.redirect('Profile.html?addSuccess=false')
    } else {
      console.log('Joke added successfully');
      res.redirect('MainPage.html?addSuccess=true');
    }
	
  });
});

app.get('/api/data', (req, res) => {
  // Query your database for the data
  db.query('SELECT vicc_tartalom FROM viccek', (err, results) => {
      if (err) {
          console.error('Database query error: ' + err.message);
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          res.json(results); // Send data as JSON response
      }
  });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
