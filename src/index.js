let projects = [];

import "./styles.css";
import { createProject } from "./create-project";

const create_project_btn = document.querySelector("#create-project-btn");
const createProjectDialog = document.querySelector("#createProjectDialog");
const cancelProjectBtn = createProjectDialog.querySelector("#cancelProjectBtn");
const createProjectForm =
  createProjectDialog.querySelector("#createProjectForm");

createProjectForm.addEventListener("submit", (e) => {
  let newProject = createProject(e, createProjectDialog);
  projects.push(newProject);
  createProjectDialog.close();
  createProjectForm.reset();
});

cancelProjectBtn.addEventListener("click", () => {
  createProjectDialog.close();
});

create_project_btn.addEventListener("click", () => {
  createProjectDialog.showModal();
});
