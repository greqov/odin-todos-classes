export default class Todo {
  constructor({
    id = `todo-${crypto.randomUUID()}`,
    title = 'untitled',
    description = '',
    dueDate = new Date(),
    priority = 'middle'
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
