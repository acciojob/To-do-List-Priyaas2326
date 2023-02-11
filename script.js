//your code here
const addTodoBtn = document.getElementById("addTodoBtn");
const newTodoInput = document.getElementById("newTodoInput");
const todoList = document.getElementById("todoList");

addTodoBtn.addEventListener("click", () => {
  const todo = newTodoInput.value;

  if (todo === "") {
    alert("Todo item cannot be empty.");
    return;
  }

  const newTodo = document.createElement("li");
  newTodo.innerText = todo;
  todoList.appendChild(newTodo);

  newTodoInput.value = "";
});

