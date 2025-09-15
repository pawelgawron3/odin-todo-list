import { showTaskModal } from "./show-task-modal";

function displayProjectContent(project) {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");

  const titleEl = document.createElement("h1");
  titleEl.textContent = project.title;

  const authorEl = document.createElement("h2");
  authorEl.textContent = `Author: ${project.author}`;

  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task";
  addTaskBtn.classList.add("add-task-btn");

  addTaskBtn.addEventListener("click", () => {
    showTaskModal();
  });

  const taskList = document.createElement("ul");
  taskList.classList.add("task-list");
  taskList.textContent = "No tasks yet.";

  projectContainer.appendChild(titleEl);
  projectContainer.appendChild(authorEl);
  projectContainer.appendChild(addTaskBtn);
  projectContainer.appendChild(taskList);

  content.appendChild(projectContainer);
}

export { displayProjectContent };
