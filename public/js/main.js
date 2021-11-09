// les selecteurs
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");

// Mes Fonctions
let addTodo = (event) =>{
    event.preventDefault();
    // crée Div.todo
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // crée Li
    let newTodo = document.createElement("li")
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo)

    // Button Chek
    let completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class = "fas fa-check"></i>'
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // Button poubelle
    let trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);

    // ajoute dans la todoList
    todoList.appendChild(todoDiv)
}
//  Les events
todoButton.addEventListener("click", addTodo)
