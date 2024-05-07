// 1 start
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/TodoRoute');
const app = express();
const cors = require("cors");
const PORT = process.env.port || 5000; 
// 1 pause

// 2 start
require('dotenv').config();

mongoose
    .connect(process.env.MONGODB_URL) 
    .then(() => {console.log(`Connected to DB`)})
    .catch((err) => {console.log(`Error in Connection with Database: ${err}`)});

// 2 end

// 3 start
app.use(express.json());
app.use(cors());
app.use(routes); 
// 3 end

// 1 resume
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
// 1 end