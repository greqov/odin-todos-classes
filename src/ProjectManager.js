import Project from './Project';

export default class ProjectManager {
  #currentProject = null;
  projects = [];

  addProject(project) {
    this.projects.push(project);
    this.currentProject = project;
  }

  /**
   * @param {import("./Project").default} project
   */

  set currentProject(project) {
    if (!(project instanceof Project)) {
      throw new Error(
        'Failed attempt to set non-project object as current project',
      );
    }
    this.#currentProject = project;
  }

  get currentProject() {
    return this.#currentProject;
  }

  // add,
  // remove,
  // update,
  // set current project
}
