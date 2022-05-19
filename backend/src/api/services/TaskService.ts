import { Task, TaskSchema } from "../../database/interfaces/TaskInterface";
import Service from "./IndexService";
import TaskModel from "../../database/models/TaskModel";
import { InvalidFieldsError } from "../errors";

class TaskService extends Service<Task> {
  constructor(public model = new TaskModel()) {
    super(model);
  }
}

export default TaskService;