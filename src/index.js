import "./styles.css";

const create_project_btn = document.querySelector("#create-project-btn");
const createProjectDialog = document.querySelector("#createProjectDialog");
const cancelProjectBtn = createProjectDialog.querySelector("#cancelProjectBtn");

cancelProjectBtn.addEventListener("click", () => {
  createProjectDialog.close();
});

create_project_btn.addEventListener("click", () => {
  createProjectDialog.showModal();
});
