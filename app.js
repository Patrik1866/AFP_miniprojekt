const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

// Create a MySQL database connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'viccportal_db',
});

app.get('/', async (req, res) => {
	res.sendFile(path.join(__dirname, 'Public', 'Home.html'));
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
      res.status(500).send('Error registering user');
    } else {
      console.log('User registered successfully');
      res.redirect('Home.html');
    }
	
  });
});

app.post('/login', (req, res) => {
	const { username, password } = req.body;
  
	// Query the database to check if the user exists
	const sql = 'SELECT * FROM viccportal WHERE username = ? AND password = ?';
	db.query(sql, [username, password], (err, results) => {
	  if (err) {
		console.error(err);
		res.status(500).send('Internal server error');
	  } else if (results.length === 0) {
		res.status(401).send('Authentication failed'); // User not found or incorrect password
	  } else {
		// User is authenticated
		console.log('User login successful')
		res.redirect('MainPage.html')
	  }
	});
  });

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
