class TaskNotFoundError extends Error {
  constructor(message = 'Task not found') {
    super(message);
    this.name = 'notFound';
  }
}

export default TaskNotFoundError;