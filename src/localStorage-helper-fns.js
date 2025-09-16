class Project {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }
  tasks = [];
}

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function saveProjectsTostorage(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function loadProjectsFromStorage() {
  const storedProjects = localStorage.getItem("projects");
  if (!storedProjects) {
    return [];
  }

  const plainProjects = JSON.parse(storedProjects);
  return plainProjects.map((p) => {
    let project = new Project(p.author, p.title);
    project.tasks = (p.tasks || []).map(
      (t) => new Task(t.title, t.description, t.dueDate, t.priority)
    );
    //let tasks = [];
    // p.tasks.map((t) => {
    //   let task = new Task(t.title, t.description, t.dueDate, t.priority);
    //   tasks.push(task);
    // });
    // project.tasks = tasks || [];
    return project;
  });
}

export { saveProjectsTostorage, loadProjectsFromStorage };
