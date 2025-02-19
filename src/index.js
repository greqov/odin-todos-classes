import './reset.css';
import './styles.css';

import Project from './Project';
import Todo from './Todo';

const project = new Project({ title: 'Default' });
const todo = new Todo({ title: 'the first one', priority: 'high' });

project.addTodo(todo);

console.log(project);
console.log(todo);
