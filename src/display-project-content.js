import { showTaskModal } from "./show-task-modal";
import { displayTasksList } from "./display-tasks-list";

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

  projectContainer.appendChild(titleEl);
  projectContainer.appendChild(authorEl);
  projectContainer.appendChild(addTaskBtn);

  content.appendChild(projectContainer);

  if (project.tasks.length > 0) {
    displayTasksList(project);
  }
}

export { displayProjectContent };
