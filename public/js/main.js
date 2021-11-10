// mes Imports Function
import {addTodo} from "./modules/input.js";
import {deleteCheck} from "./modules/delete-valide.js";
import {filtreTodo} from "./modules/filtres.js";

// les selecteurs
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let filterOption = document.querySelector(".filtre-todo");

//  Les events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filtreTodo);
