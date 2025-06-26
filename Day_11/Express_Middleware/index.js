const express = require('express')
const app = express();
const path = require('path');
const port = 3000;

// Parsing incoming body data
// app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Serving static file 
app.use(express.static(path.join(__dirname,'public')));

// It's Generic Middlware that will be called for every request
app.use((req,res,next)=>{
    console.log('Genric Middlware -> Time:',new Date().toTimeString());
    next();
})

// It's path specific Middlware that will be called for every request to /users
app.use('/path',(req,res,next)=>{
    console.log('Path Specific Middlware -> Time:',new Date().toTimeString());
})


app.get('/',(req,res)=>{
    res.send("Server is running!");
})

app.get('/json',(req,res)=>{
    res.json({name:'Shivam Kumar',age:22})
})

app.get('/contact',(req,res)=>{
    console.log("Contact Api Hit");
    res.redirect('contact.html');
})

// POST Request for user
app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send("User Created");
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
