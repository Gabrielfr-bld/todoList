import { Task, TaskSchema } from "../../database/interfaces/TaskInterface";
import Service from "./IndexService";
import TaskModel from "../../database/models/TaskModel";
import { InvalidFieldsError } from "../errors";

class TaskService extends Service<Task> {
  constructor(public model = new TaskModel()) {
    super(model);
  }
  public async create(task: Task): Promise<Task> {
    const validation = TaskSchema.safeParse(task);
    if(!validation.success) throw new InvalidFieldsError();
    return this.model.create(task);
  }
}

export default TaskService;