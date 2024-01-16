document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const taskInput = document.getElementById("new-task-description");
      const taskList = document.getElementById("tasks");
  
      const taskText = taskInput.value;
  
      // Creating a new list item
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
  
      // Appending the new list item to the task list
      taskList.appendChild(listItem);
  
      // Clearing the input field
      taskInput.value = "";
    });
  });
  