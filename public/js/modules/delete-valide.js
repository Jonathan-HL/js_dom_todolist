export let deleteCheck = (e) => {
    let item = e.target;
    
    // supprimer 1 todo
    if (item.classList[0] === "trash-btn") {
        let todo = item.parentElement;
        // annimation delete(anime) css
        todo.classList.add("anime")
        todo.addEventListener("transitionend", () => { 
            todo.remove();
        })
    }
    // complite todo
    if (item.classList[0] === "complete-btn") {
        let todo = item.parentElement;
        todo.classList.toggle("completed")
    }
    }
    