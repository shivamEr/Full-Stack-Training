
const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;

const todos = [
    {
        task: "Sample todos",
        completed: false
    }
];

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/all-todos',(req,res)=>{
    console.log("All todos sended");
    res.status(200).json(todos);
})

app.get('/add-todos',(req,res)=>{
    res.redirect('/addTodo.html');
})

app.post('/add-todos', (req, res) => {
    let task = req.body.task;
    let todo = {task:task, completed:false};
    todos.push(todo);
    res.redirect('/');
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

