import './reset.css';
import './styles.css';

import defaultData from './defaultData.json';
import Project from './Project';
import Todo from './Todo';

const project = new Project({ title: 'Default' });
const todo = new Todo({ title: 'the first one', priority: 'high' });

defaultData.forEach((todo) => {
  project.addTodo(new Todo(todo));
});

project.updateTodo(101, { title: 'create a Todo class', done: true });

// project.removeTodo(101);

console.log(project);
