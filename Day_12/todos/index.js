const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


let todos = [
    {
        id: 1,
        task: "Example todo",
        completed: true
    }
]

app.get('/all-todos', (req, res) => {
    console.log("All-todos with GET");
    res.json(todos);
})

// Api to add todos
app.post('/add-todos', (req, res) => {
    let task = req.body.task;
    console.log(task);
    todos.push({ id: uuidv4(), task: task, completed: false });
    console.log("Todos added");
    // res.status(200).json({success:true});
    res.status(200).json({success:true});
})

// Api to clear completed toodos
app.delete('/clear-completed', (req, res) => {
    let newtodo = todos.filter((todo) => !todo.completed);
    todos = newtodo;
    console.log("Todos cleared");
    res.status(200).json({ success: true, message: "completed todos cleared" })
})

// Marking as completed or not 
app.put('/mark-complete/:id', (req, res) => {
    let id = req.params.id;
    let todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        console.log("Todo marked");
        res.status(200).json({ success: true, message: "Todo marked as completed" })
    }

    res.status(404).json({ success: false, message: "Todo not found" })


})

// Api to delete a particular todos
app.delete('/delete-todo/:id', (req, res) => {
    let id = req.params.id;
    todos = todos.filter((todo) => todo.id !== id);
    console.log("Todo deleted");
    res.status(200).json({ success: true, message: "Todo deleted" })
})

app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`);
})