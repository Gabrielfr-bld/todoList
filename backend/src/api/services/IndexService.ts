import { Model } from "../../database/interfaces/ModelInterface";

abstract class Service<T> {
  constructor(protected model: Model<T>) { }

  public async create(obj: T): Promise<T | null> {
    const resp = await this.model.create(obj);
    return resp;
  }

  public async read(): Promise<T[]> {
    const resp = await this.model.read();
    return resp;
  }

  public async readOne(id: string): Promise<T | null> {
    const resp = await this.model.readOne(id);
    return resp;
  }

  public async update(id: string, obj: T): Promise<T | null> {
    const resp = await this.model.update(id, obj);
    return resp;
  }

  public async delete(id: string): Promise<T | null> {
    const resp = await this.model.delete(id);
    return resp;
  }
}

export default Service;