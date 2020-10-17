import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CraDto } from './dto/cra.dto';
import { Cra } from './interfaces/cra.interface';

@Injectable()
export class CraService {

  constructor(@Inject('CRA_MODEL') private readonly craModel: Model<Cra>) {}

  async create(craDto: CraDto): Promise<Cra> {
    const createdCra = new this.craModel(craDto);
    return await createdCra.save();
  }

  async findAll(): Promise<Cra[]> {
    return await this.craModel.find().exec();
  } 
  
  async find(id: string): Promise<Cra[]> {
    return await this.craModel.findById(id).exec();
  }

  async findD(client: string): Promise<Cra[]> {
    return await this.craModel.findByClient(client).exec();
  }


  async update(id: string, craDto: CraDto): Promise<Cra> {
    return await this.craModel.findByIdAndUpdate(id, craDto);
  }

  async delete(id: string, craDto: CraDto): Promise<Cra> {
    return await this.craModel.findByIdAndRemove(id);
  }
}