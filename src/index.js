document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit",toDO);
});
const toDo = event => {
  event.preventDefault();
  const task = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = task.value;
  task.value = '';
  document.getElementById("tasks").appendChild(newTask);
}
