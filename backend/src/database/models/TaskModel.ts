import { model as createModel } from "mongoose";
import { Task } from "../interfaces/TaskInterface";
import taskSchema from "../schemas/TaskSchema";
import MongoModel from "./MongoModel";

class TaskModel extends MongoModel<Task> {
  constructor(public model = createModel('Task', taskSchema)) {
    super(model)
  }
}

export default TaskModel;