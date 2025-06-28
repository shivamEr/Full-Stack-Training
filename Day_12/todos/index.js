const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config(); // for enviroment variables

const connectToDB = require('./config/db')
const todoRoutes = require('./routes/todoRoutes')

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(todoRoutes);

app.listen(PORT, async () => {
    connectToDB();
    console.log(`Server is running on  http://localhost:${PORT}`);
})