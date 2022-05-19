import { Model as M, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { }

  create = async (obj: T): Promise<T> => {
    const resp = await this.model.create({ ...obj });
    return resp;
  }

  read = async (): Promise<T[]> => {
    const resp = this.model.find();
    return resp;
  }

  readOne = async (id: string): Promise<T | null> => {
    const resp = this.model.findById(id);
    return resp;
  }

  update = async (id: string, obj: T): Promise<T | null> => {
    const resp = await this.model.findByIdAndUpdate(id, obj);
    return resp;
  }

  delete = async (id: string): Promise<T | null> => {
    const resp = await this.model.findByIdAndDelete(id);
    return resp;
  }
}

export default MongoModel;