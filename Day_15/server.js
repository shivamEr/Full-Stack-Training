const express = require('express');
const app = express();
const db = require('./config/db');
const userRoute = require('./routes/userRoute');

// Connect to DB
db();

// Middleware to parse JSON
app.use(express.json());

// Mount user routes
app.use('/api/user', userRoute);

app.get('/', (req, res) => {
    res.send("Hey, What's up?");
});

// Universal 404 route
// app.use('*', (req, res) => {
//     res.status(404).json({
//         success: false,
//         message: '404 - Route Not Found'
//     });
// });

app.listen(3000, () => {
    console.log("Server is running! http://localhost:3000");
});
