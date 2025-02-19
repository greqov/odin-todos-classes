import './reset.css';
import './styles.css';

import defaultData from './defaultData.json';
import ProjectManager from './ProjectManager';
import Project from './Project';
import Todo from './Todo';

const pm = new ProjectManager();

const pr1 = new Project({ id: 361, title: 'Default' });
const pr2 = new Project({ id: 500, title: 'Studying' });
const pr3 = new Project({ id: 770, title: 'Shopping' });

pm.addProject(pr1);
pm.addProject(pr2);
pm.addProject(pr3);

pm.currentProject = pr2;

console.log(pm);

defaultData.forEach((todo) => {
  pm.currentProject.addTodo(new Todo(todo));
});

pm.currentProject.updateTodo(101, { title: 'create a Todo class', done: true });

console.log('current project', pm.currentProject);
