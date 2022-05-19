import TaskController from './api/controllers/TaskController';
import CustomRouter from './api/routes/Router';
import App from './app';
import { Task } from './database/interfaces/TaskInterface';

const server = new App();

const taskController = new TaskController();

const taskRouter = new CustomRouter<Task>();
taskRouter.addRoute(taskController);

export default server;