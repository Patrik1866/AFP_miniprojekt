const exp = require('constants');
const express = require('express');
 

const path = require('path');
// Creating express object
const app = express();
app.use(express.static(path.join(__dirname, 'AFP1_miniproject')));


// Handling GET request
app.get('/', async (req, res) => {
	res.sendFile(path.join(__dirname, 'AFP1_miniproject', 'Home.html'));
});

// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log(
`Server started on port ${PORT}`));

