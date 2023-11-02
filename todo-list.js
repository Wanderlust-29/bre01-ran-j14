window.addEventListener("DOMContentLoaded", function(){

    
    addEventListener("submit", (event)=> {
        event.preventDefault(); 
        let newTask = document.getElementById("newTask");
        let todoList = document.getElementById("todo-list");
        
        if(newTask !== ""){
            let newLi = document.createElement("li");
            let newLiText = document.createTextNode(newTask.value)
            todoList.appendChild(newLi);
            newLi.appendChild(newLiText);
        } else {
            console.log("error")
        }
    })
});