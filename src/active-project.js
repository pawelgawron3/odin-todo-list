let activeProject = null;

function setActiveProject(project) {
  activeProject = project;
}

function getActiveProject() {
  return activeProject;
}

export { setActiveProject, getActiveProject };
