import { Request, Response } from 'express';
import { ZodSchema } from 'zod';
import Service from '../services/IndexService';
import { messageStatus } from '../utils/messageStatus';
import { statusCode } from '../utils/statusCode';

export interface RequesWithBody<T> extends Request {
  body: T;
}

export type ResponseError = {
  error:  unknown; 
}

abstract class Controller<T> {
  abstract route: string;

  constructor( protected service: Service<T>, protected schema: ZodSchema<T>) { }

  public async create(
    req: RequesWithBody<T>,
    res: Response<T | ResponseError | null>
  ) {
    const { body } = req;
    try {
      const newTask = await this.service.create(body);
      return res.status(statusCode.ok).json(newTask)
    } catch (error) {
      return res.status(statusCode.badRequest).json({ error: messageStatus.internalServerError  })
    }
  }
}

export default Controller;