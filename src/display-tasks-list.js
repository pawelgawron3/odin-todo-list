import { saveProjectsTostorage } from "./localStorage-helper-fns";
import { getProjects } from "./project-state";

function displayTasksList(project) {
  let container = document.querySelector("#content .project-container");
  let task_list = container.querySelector(".task-list");

  if (!task_list) {
    task_list = document.createElement("ul");
    task_list.classList.add("task-list");
    container.appendChild(task_list);
  } else {
    task_list.innerHTML = "";
  }
  project.tasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("task");

    const header = document.createElement("div");
    header.classList.add("task-header");

    const title = document.createElement("h3");
    title.textContent = task.title;

    const dueDate = document.createElement("span");
    dueDate.textContent = `Due: ${task.dueDate}`;
    dueDate.classList.add("task-date");

    header.appendChild(title);
    header.appendChild(dueDate);

    const description = document.createElement("p");
    description.textContent = task.description;

    const priorityTag = document.createElement("span");
    priorityTag.textContent = task.priority;
    priorityTag.classList.add("task-priority", task.priority);

    const actions = document.createElement("div");
    actions.classList.add("task-actions");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-task-btn");

    deleteBtn.addEventListener("click", () => {
      let index = project.tasks.indexOf(task);
      if (index !== -1) {
        project.tasks.splice(index, 1);
        let allProjects = getProjects();
        saveProjectsTostorage(allProjects);
      }

      displayTasksList(project);
    });

    const taskCompletedCheck = document.createElement("input");
    taskCompletedCheck.type = "checkbox";
    taskCompletedCheck.classList.add("taskCheckbox");

    if (task.completed) {
      taskCompletedCheck.checked = true;
      li.classList.add("task-completed");
    }

    taskCompletedCheck.addEventListener("change", () => {
      if (task.completed) {
        li.classList.remove("task-completed");
        task.completed = false;
      } else {
        li.classList.add("task-completed");
        task.completed = true;
      }
      let allProjects = getProjects();
      saveProjectsTostorage(allProjects);
    });

    actions.appendChild(taskCompletedCheck);
    actions.appendChild(deleteBtn);

    li.appendChild(header);
    li.appendChild(description);
    li.appendChild(priorityTag);
    li.appendChild(actions);

    task_list.appendChild(li);
  });
}

export { displayTasksList };
