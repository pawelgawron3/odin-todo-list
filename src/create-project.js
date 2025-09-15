class Project {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }
  tasks = [];
}

function createProject(e, dialog) {
  e.preventDefault();

  let author = dialog.querySelector("#project-author").value;
  let title = dialog.querySelector("#project-title").value;

  let project = new Project(author, title);
  return project;
}

export { createProject };
