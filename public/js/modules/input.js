let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
export let addTodo = (event) =>{

    event.preventDefault();
    // crée Div.todo
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // crée Li
    let newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo)

    // Button verifi
    let completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class = "fas fa-check"></i>'
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // Button modif
    let modifButton = document.createElement("button");
    modifButton.innerHTML = '<i class="fas fa-stream"></i>'
    modifButton.classList.add("modif-btn");
    todoDiv.appendChild(modifButton);
   
    // Button poubelle
    let trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // ajoute dans la todoList
    todoList.appendChild(todoDiv);
    
    // Clear la valeur input
    todoInput.value = "";

}

