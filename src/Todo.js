export default class Todo {
  constructor({
    id = `todo-${crypto.randomUUID()}`,
    done = false,
    title = 'untitled',
    description = '',
    dueDate = new Date(),
    priority = 'middle',
  }) {
    this.id = id;
    this.done = done;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
