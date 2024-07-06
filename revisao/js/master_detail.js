const saveTodo = (event) => {
  event.preventDefault();
  const todoInput = document.getElementById("todo");
  const todo = todoInput.value;
  const listItem = `<li>${todo}</li>`;
  document.getElementById("todos").insertAdjacentHTML("beforeend", listItem);
  todoInput.value = "";
};
