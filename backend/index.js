const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
require('./utils/mongo'); // Dummy MongoDB connection

const queryRoute = require('./routes/query');
const enrollmentRoute = require('./routes/enrollment');

const app = express();

app.use(cors());
app.use(express.json());


// Serve static frontend files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve images from backend folder
app.use('/images', express.static(__dirname));


// Catch-all route to serve index.html for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API routes
app.use('/api/query', queryRoute);
app.use('/api/enroll', enrollmentRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

