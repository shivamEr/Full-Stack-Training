async function addTodos() {
    let result = await fetch('http://localhost:4000/all-todos');
    let data = await result.json();
    console.log(data);

    insertInDom(data);
}

function insertInDom(data) {
    let container = document.getElementsByClassName("todo-container")[0];
    console.log(container);
    data.map((data) => {
        // creating elements
        let div = document.createElement('div');
        let sts = document.createElement('div');

        // Assigning task from result
        div.innerHTML = `${data.task}`;
        sts.innerHTML = `${data.completed}`;

        // ✅ Add class
        div.classList.add('todo-item');   
        sts.classList.add('status-pending'); 

        // Inserting to the document
        container.appendChild(div);
        container.appendChild(sts);

    })
}

addTodos();