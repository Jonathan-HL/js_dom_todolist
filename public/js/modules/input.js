let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
export let addTodo = (event) =>{

    event.preventDefault();
    // crée Div.todo
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    

    // crée Li
    // let newTodo = document.createElement("li")
    // // newTodo.innerText = todoInput.value;
    // newTodo.classList.add("todo-item");
    // todoDiv.appendChild(newTodo)

    //crée input
    let input = document.createElement("input");
            input.classList.add("text");
            input.type = "text";
            input.value =  todoInput.value;
            input.setAttribute("readonly", "readonly")
            todoDiv.appendChild(input);
            let demande = todoInput.value;
            if (!demande) {
                alert("Rajoute une taches !");
                return
            }

    // Button verifi
    let completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class = "fas fa-check"></i>'
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
  
    // Button modif
    let modifButton = document.createElement("button");
    modifButton.innerHTML = 'Edit'
    modifButton.classList.add("modif-btn");
    todoDiv.appendChild(modifButton);

    // Event Edit 
        modifButton.addEventListener("click", () => {
            if (modifButton.innerText == "Edit") {
                input.removeAttribute("readonly")
                input.focus();
                modifButton.innerText = "save";
            } else {
                input.setAttribute("readonly", "readonly")
                modifButton.innerText = "Edit"
            }
        });

    // Button poubelle
    let trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // ajoute dans la todoList
    todoList.appendChild(todoDiv);
    
    // Clear la valeur input
    todoInput.value = "";

    // Efface touts
    let deleteAll = document.querySelector(".btnEfface");
        
        deleteAll.addEventListener("click", () => {
            todoDiv.remove();
            
        })
    }

