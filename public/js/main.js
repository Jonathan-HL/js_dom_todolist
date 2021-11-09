// mes Imports
import {addTodo} from "./modules/input.js";
import {deleteCheck} from "./modules/delete.js";
// les selecteurs
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");

//  Les events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteCheck);
