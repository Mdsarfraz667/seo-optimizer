const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/keywords', require('./routes/keywordResearchRoutes'));
// Use other routes similarly

// Database connection
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
