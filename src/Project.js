export default class Project {
  constructor({
    id = `project-${crypto.randomUUID()}`,
    title = 'untitled',
    todos = [],
  }) {
    this.id = id;
    this.title = title;
    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  updateTodo(todoId, payload) {
    const todo = this.todos.find((todo) => todo.id === todoId);
    if (!todo) {
      // show some notification on error:
      // throw new Error(`Can't find todo with id ${todoId}`);
      // or
      console.error(`Can't find todo with id ${todoId}`);
      return;
    }
    Object.assign(todo, payload);
  }

  removeTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }
}
