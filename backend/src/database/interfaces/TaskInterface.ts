import { z } from "zod";

const TaskSchema = z.object({
  task: z.string({
    required_error: 'Task is required',
    invalid_type_error: 'Task must be a string',
  }).min(3, { message: 'Task must be 3 or more characters long' }),
  status: z.enum(['pendente', 'em andamento', 'pronto'])
})

export type Task = z.infer<typeof TaskSchema>;

export { TaskSchema };