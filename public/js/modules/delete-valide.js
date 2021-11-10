export let deleteCheck = (e) => {
    let item = e.target;
    
    // supprimer todo
    if (item.classList[0] === "trash-btn") {
        let todo = item.parentElement;
        // annimation delete(fall) css
        todo.classList.add("fall")
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