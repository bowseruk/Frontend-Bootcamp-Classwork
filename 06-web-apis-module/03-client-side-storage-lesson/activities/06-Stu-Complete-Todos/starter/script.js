var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

init();

function init() {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  renderTodos();
}

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.dataset.index = i;
    var button = document.createElement("button");
    button.textContent = "complete";
    button.addEventListener("click", function (event) {
      todos.splice(this.parentElement.dataset.index, 1)
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos()
    })
    li.textContent = todo;
    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// When form is submitted...
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});
