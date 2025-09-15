function displayTasksList(tasksArray) {
  let task_list = document.querySelector(".task-list");

  if (!task_list) {
    task_list = document.createElement("ul");
    task_list.classList.add("task-list");
    document
      .querySelector("#content .project-container")
      .appendChild(task_list);
  }

  task_list.innerHTML = "";

  tasksArray.forEach((task) => {
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

    //eventListener do deleteBtn

    actions.appendChild(deleteBtn);

    li.appendChild(header);
    li.appendChild(description);
    li.appendChild(priorityTag);
    li.appendChild(actions);

    task_list.appendChild(li);
  });
}

export { displayTasksList };
