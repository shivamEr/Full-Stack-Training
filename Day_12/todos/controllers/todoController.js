
const Todo = require('../models/todos');

exports.allTodos = async (req, res) => {
    console.log("All-todos with GET");
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.addTodos = async (req, res) => {
    console.log("Add-todos with POST");
    try {
        let task = req.body.task;
        const todo = new Todo({ task });
        await todo.save();
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.clearCompleted = async (req, res) => {
    // remove all the todos that are completed in db and response the user
    console.log("Clear-completed with DELETE");
    try {
        await Todo.deleteMany({ completed: true });
        console.log("Todos cleared");
        res.status(200).json({ success: true, message: "completed todos cleared" })
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.markCompleted = async (req, res) => {
    try {
        const id = req.params.id;

        // Retrieve the todo
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }

        // Toggle the completed status
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { completed: !todo.completed },
            { new: true }
        );

        res.status(200).json({ success: true, todo: updatedTodo });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.deleteTodo = async (req, res) => {
    try {
        let id = req.params.id;

        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }
        res.status(200).json({ success: true, message: "Todo deleted" });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}