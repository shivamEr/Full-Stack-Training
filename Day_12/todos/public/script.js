const itemCont = document.getElementById("item-container");
const btnContainer = document.getElementById("btn-container");

// Button Toggle and Filtering Logic
btnContainer.addEventListener("click", (e) => {
    const btn = e.target;

    // Toggle active button style
    if (btn.id === 'all' || btn.id === 'active' || btn.id === 'completed') {

        btnContainer.querySelectorAll("button").forEach((b) =>
            b.classList.remove("bg-green-500", "text-white")
        );
        btn.classList.add("bg-green-500", "text-white");

        // Call respective functions
        if (btn.id === "all") allTodos();
        else if (btn.id === "active") activeTodos();
        else if (btn.id === "completed") completedTodos();
    }
});

// Add todos when form submiting
document.getElementById("todo-form").addEventListener("submit", async(e) =>{
    e.preventDefault();
    const newTodo = document.getElementById("task").value.trim();
    if (newTodo) {
        let res = await fetch('http://localhost:4000/add-todos',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({task:newTodo})
                
        });
        let data = await res.json();
        console.log(data);
        allTodos();
    }
})

// Load All Todos
async function allTodos() {
    itemCont.innerHTML = "<div class='text-center text-gray-500'>Loading...</div>";
    try {
        const res = await fetch("http://localhost:4000/all-todos");
        const todos = await res.json();

        renderTodos(todos);
    } catch (err) {
        itemCont.innerHTML = `<div class="text-red-500">Error loading todos</div>`;
        console.error(err);
    }
}

// Active Todos
async function activeTodos() {
    itemCont.innerHTML = "<div class='text-center text-gray-500'>Loading...</div>";
    try {
        const res = await fetch("http://localhost:4000/all-todos");
        const todos = await res.json();

        const active = todos.filter((todo) => !todo.completed);
        renderTodos(active);
    } catch (err) {
        itemCont.innerHTML = `<div class="text-red-500">Error loading active todos</div>`;
        console.error(err);
    }
}

// Completed Todos
async function completedTodos() {
    itemCont.innerHTML = "<div class='text-center text-gray-500'>Loading...</div>";
    try {
        const res = await fetch("http://localhost:4000/all-todos");
        const todos = await res.json();

        const completed = todos.filter((todo) => todo.completed);
        renderTodos(completed);
    } catch (err) {
        itemCont.innerHTML = `<div class="text-red-500">Error loading completed todos</div>`;
        console.error(err);
    }
}

// Clear Completed Todos
async function clearCompleted() {
    try {
        await fetch("http://localhost:4000/clear-completed", {
            method: "DELETE",
        });
        allTodos(); // Reload the todos
    } catch (err) {
        alert("Failed to clear completed todos.");
        console.error(err);
    }
}

// Render Todos
function renderTodos(todos) {
    itemCont.innerHTML = "";
    if (todos.length === 0) {
        itemCont.innerHTML = `<div class="text-center text-gray-400">No todos found</div>`;
        return;
    }

    todos.forEach((todo) => {
        const div = document.createElement("div");
        div.className = "flex justify-between items-center p-3 border rounded-md";

        div.innerHTML = `
            <span class="${todo.completed ? 'line-through text-gray-400' : ''}">${todo.task}</span>
            <div class="flex gap-2">
                <button onclick="markCompleted('${todo._id}')" class="bg-green-500 text-white px-3 py-1 rounded-md text-sm">
                    ${todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button onclick="deleteTodo('${todo._id}')" class="bg-red-500 text-white px-3 py-1 rounded-md text-sm">
                    Delete
                </button>
            </div>
        `;

        itemCont.appendChild(div);
    });
}

// Complete Todo
async function markCompleted(id) {
    try {
        await fetch(`http://localhost:4000/mark-complete/${id}`, {
            method: "PUT",
        });
        allTodos();
    } catch (err) {
        alert("Failed to mark as completed.");
        console.error(err);
    }
}

// Delete Todo
async function deleteTodo(id) {
    try {
        await fetch(`http://localhost:4000/delete-todo/${id}`, {
            method: "DELETE",
        });
        allTodos();
    } catch (err) {
        alert("Failed to delete todo.");
        console.error(err);
    }
}

window.addEventListener("DOMContentLoaded", allTodos);
