export default class Project {
  constructor({
    id = `project-${crypto.randomUUID()}`,
    title = 'untitled',
    todos = []
  }) {
    this.id = id;
    this.title = title;
    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }
}
