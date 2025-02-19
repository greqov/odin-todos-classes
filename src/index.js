import './reset.css';
import './styles.css';

import defaultData from './defaultData.json';
import ProjectManager from './ProjectManager';
import Project from './Project';
import Todo from './Todo';

const pm = new ProjectManager();

pm.addProject(new Project({ id: 361, title: 'Default' }));
pm.addProject(new Project({ id: 500, title: 'Studying' }));
pm.addProject(new Project({ id: 770, title: 'Shopping' }));

pm.setCurrentProject(361);

console.log(pm);

defaultData.forEach((todo) => {
  pm.getCurrentProject().addTodo(new Todo(todo));
});

pm.getCurrentProject().updateTodo(101, { title: 'create a Todo class', done: true });

console.log('current project', pm.getCurrentProject());
