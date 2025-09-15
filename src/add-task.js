class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function addTask(e, dialog) {
  e.preventDefault();

  let title = dialog.querySelector("#task-title").value;
  let description = dialog.querySelector("#task-description").value;
  let dueDate = dialog.querySelector("#task-dueDate").value;
  let priority = dialog.querySelector("#task-priority").value;

  let task = new Task(title, description, dueDate, priority);
  return task;
}

export { addTask };
