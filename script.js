const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Add new todo item
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task === "") return;

  addTodo(task);
  todoInput.value = "";
});

function addTodo(task) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = task;
  span.style.cursor = "pointer";

  // Toggle completed on click
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×"; // cross symbol
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
}