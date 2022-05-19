import { Schema, Document } from "mongoose";
import { Task } from "../interfaces/TaskInterface";

interface TaskDocument extends Task, Document {  }

const taskSchema = new Schema<TaskDocument>({
  task: String,
  status: String,
  createdAt: new Date(), 
},
{
  versionKey: false,
},
);

export default taskSchema;