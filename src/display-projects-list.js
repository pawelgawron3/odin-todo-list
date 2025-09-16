import { displayProjectContent } from "./display-project-content";
import { setActiveProject } from "./active-project";
import { getActiveProject } from "./active-project";

function displayProjectsList(projectsArray) {
  const sidebar = document.querySelector("#sidebar");
  let listContainer = document.querySelector(".project-list");

  if (!listContainer) {
    listContainer = document.createElement("ul");
    listContainer.className = "project-list";
  } else {
    listContainer.innerHTML = "";
  }

  projectsArray.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.title;
    li.addEventListener("click", () => {
      setActiveProject(project);
      displayProjectContent(project);
    });

    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.textContent = "Delete";
    deleteProjectBtn.classList.add("delete-project-btn");

    deleteProjectBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      let index = projectsArray.indexOf(project);
      let activeProject = getActiveProject();
      if (projectsArray.indexOf(activeProject) === index) {
        const content = document.querySelector("#content");
        content.innerHTML = "";
      }
      if (index !== -1) {
        projectsArray.splice(index, 1);
        displayProjectsList(projectsArray);
      }
    });

    li.appendChild(deleteProjectBtn);
    listContainer.appendChild(li);
  });

  sidebar.appendChild(listContainer);
}

export { displayProjectsList };
