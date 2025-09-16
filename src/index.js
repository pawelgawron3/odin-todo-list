let projects = loadProjectsFromStorage();
setProjects(projects);

import "./styles.css";
import { createProject } from "./create-project";
import { displayProjectsList } from "./display-projects-list";
import { addTask } from "./add-task";
import { displayProjectContent } from "./display-project-content";
import { getActiveProject } from "./active-project";
import {
  saveProjectsTostorage,
  loadProjectsFromStorage,
} from "./localStorage-helper-fns";
import { setProjects } from "./project-state";

const create_project_btn = document.querySelector("#create-project-btn");
const createProjectDialog = document.querySelector("#createProjectDialog");
const createProjectForm =
  createProjectDialog.querySelector("#createProjectForm");
const cancelProjectBtn = createProjectDialog.querySelector("#cancelProjectBtn");

const createTaskDialog = document.querySelector("#createTaskDialog");
const createTaskForm = createTaskDialog.querySelector("#createTaskForm");
const cancelTaskBtn = createTaskDialog.querySelector("#cancelTaskBtn");

displayProjectsList(projects);

createProjectForm.addEventListener("submit", (e) => {
  let newProject = createProject(e, createProjectDialog);
  projects.push(newProject);
  saveProjectsTostorage(projects);
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
  let activeProject = getActiveProject();
  if (activeProject) {
    activeProject.tasks.push(newTask);
    saveProjectsTostorage(projects);

    displayProjectContent(activeProject);
  }

  createTaskDialog.close();
  createTaskForm.reset();
});

cancelTaskBtn.addEventListener("click", () => {
  createTaskDialog.close();
});
