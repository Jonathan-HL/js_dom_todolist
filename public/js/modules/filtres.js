let filterOption = document.querySelector(".filtre-todo");
let todoList = document.querySelector(".todo-list");

export let filtreTodo = (e) => {
    // met Li
    let todos = todoList.childNodes;
    // boucle mes Li
    todos.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex"
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                   todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                 }else{
                     todo.style.display = "none";
                 }
                break;    
        }
    });
}