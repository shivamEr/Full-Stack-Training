const express = require('express');
const app = express();
const db = require('./config/connectDB');
const productRoute = require('./routes/productRoute');

// Connect to DB
db();

// Middleware to parse JSON
app.use(express.json());
app.use(express.static('public'))

// Mount user routes
app.use('/api/product', productRoute);

app.get('/', (req, res) => {
    res.send("Hey, What's up?");
});

app.listen(3000, () => {
    console.log("Server is running! http://localhost:3000");
});
