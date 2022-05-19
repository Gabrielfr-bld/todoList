import { Task, TaskSchema } from "../../database/interfaces/TaskInterface";
import TaskService from "../services/TaskService";
import Controller from "./IndexController";

class TaskController extends Controller<Task> {
  private _route: string;

  constructor(
    service = new TaskService(),
    route = '/tasks',
  ) {
    super(service, TaskSchema);
    this._route = route;
  }

  get route() { return this._route } ;
}

export default TaskController;