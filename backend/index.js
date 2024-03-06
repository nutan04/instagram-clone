const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('../backend/routes/itemRoutes');
const authorRoutes = require('../backend/routes/authorRoutes');
const Routes = require('../backend/routes/routes');
const app = express();

// Middleware

 app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/items', itemRoutes);
app.use('/',authorRoutes);
app.use('/',Routes)


// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});