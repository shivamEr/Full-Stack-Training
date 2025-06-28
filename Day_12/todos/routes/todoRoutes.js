
const router = require('express').Router();
const todoController = require('../controllers/todoController');

router.get('/all-todos',todoController.allTodos);

// Api to add todos
router.post('/add-todos', todoController.addTodos)


// Api to clear completed toodos
router.delete('/clear-completed', todoController.clearCompleted)

// Marking as completed or not 
router.put('/mark-complete/:id', todoController.markCompleted)

// Api to delete a particular todos
router.delete('/delete-todo/:id', todoController.deleteTodo)

module.exports = router;
