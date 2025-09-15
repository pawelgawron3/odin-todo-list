let projects = [];
let tasks = [];

import "./styles.css";
import { createProject } from "./create-project";
import { displayProjectsList } from "./display-projects-list";
import { addTask } from "./add-task";
import { displayTasksList } from "./display-tasks-list";

const create_project_btn = document.querySelector("#create-project-btn");
const createProjectDialog = document.querySelector("#createProjectDialog");
const createProjectForm =
  createProjectDialog.querySelector("#createProjectForm");
const cancelProjectBtn = createProjectDialog.querySelector("#cancelProjectBtn");

const createTaskDialog = document.querySelector("#createTaskDialog");
const createTaskForm = createTaskDialog.querySelector("#createTaskForm");
const cancelTaskBtn = createTaskDialog.querySelector("#cancelTaskBtn");

createProjectForm.addEventListener("submit", (e) => {
  let newProject = createProject(e, createProjectDialog);
  projects.push(newProject);
  displayProjectsList(projects);
  createProjectDialog.close();
  createProjectForm.reset();
});

cancelProjectBtn.addEventListener("click", () => {
  createProjectDialog.close();
});

create_project_btn.addEventListener("click", () => {
  createProjectDialog.showModal();
});

createTaskForm.addEventListener("submit", (e) => {
  let newTask = addTask(e, createTaskDialog);
  tasks.push(newTask);
  displayTasksList(tasks);
  createTaskDialog.close();
  createTaskForm.reset();
});

cancelTaskBtn.addEventListener("click", () => {
  createTaskDialog.close();
});
