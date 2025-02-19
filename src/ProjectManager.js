export default class ProjectManager {
  constructor() {
    this.projects = [];
    this.currentProjectId = null;
  }

  addProject(project) {
    this.projects.push(project);
    this.currentProjectId = project.id;
  }

  getCurrentProject() {
    return this.projects.find(
      (project) => project.id === this.currentProjectId
    );
  }

  setCurrentProject(projectId) {
    // TODO: check if project with projectId even exist
    this.currentProjectId = projectId;
  }

  // add,
  // remove,
  // update,
  // set current project
}
