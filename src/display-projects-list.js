import { displayProjectContent } from "./display-project-content";

function displayProjectsList(projectsArray) {
  const sidebar = document.querySelector("#sidebar");
  let listContainer = document.querySelector(".project-list");

  if (!listContainer) {
    listContainer = document.createElement("ul");
    listContainer.className = "project-list";
  }

  listContainer.innerHTML = "";

  projectsArray.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.title;
    li.addEventListener("click", () => {
      displayProjectContent(project);
    });

    listContainer.appendChild(li);
  });

  sidebar.appendChild(listContainer);
}

export { displayProjectsList };
