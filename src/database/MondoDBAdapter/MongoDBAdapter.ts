import { BadRequestException } from '@nestjs/common';
import { mongoose } from './infra';

export class MongoDBAdapter {
  constructor(readonly entity) {}

  getAll() {
    try {
      return this.entity.find();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  getOne(obj: any) {
    try {
      return this.entity.findOne(obj);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async save(obj) {
    try {
      return await new this.entity(obj).save();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id, obj) {
    try {
      await this.entity.updateOne({ _id: id }, obj);
      return this.entity.findById(id); // fim de consulta
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async delete(
    id,
  ): Promise<{ ok?: number; n?: number } & { deletedCount?: number }> {
    try {
      return this.entity.deleteOne({ _id: id });
    } catch (error) {
      throw new Error('Error! ' + error.message);
    }
  }
}
