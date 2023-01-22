var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];
if (localStorage.getItem("todos") === null){
    todos = [];
    render()
} else {
    todos = JSON.parse(localStorage.getItem("todos"));
    render()
};

//  Add an event listener to the keyboard on the input
todoInput.addEventListener('keydown', function (e) {
    // Only react if the Enter button is pressed
    if (e.key === 'Enter') {
        // Stop submission on pressing enter
        e.preventDefault();
        // Don't store if the input is empty
        if (todoInput.value === "") {
            return;
        }
        // Add the new item to the todos list
        todos.push(todoInput.value);
        localStorage.setItem("todos", JSON.stringify(todos));
        // Clear the input
        todoInput.value = null;
        // Re-render the todos
        render();
    }
})
// Renders the todo list on the page
function render() {
    // Reset the todoList
    todoList.innerHTML = null;
    todoCountSpan.innerText = todos.length;
    if (todos.length === 0) {
        return
    }
    todos.forEach((element) => {
        var li = document.createElement("li");
        li.innerText = element;
        var button = document.createElement("button");
        button.textContent = "complete";
        li.appendChild(button);
        todoList.appendChild(li);
        button.addEventListener("click", function(event) {
            todos.splice(todos.indexOf(this.parentElement.innerText),1)
            render()
        })
    })
}

