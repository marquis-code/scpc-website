import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Abstract, AbstractDocument } from './schemas/abstract.schema';

@Injectable()
export class AbstractsService {
  constructor(
    @InjectModel(Abstract.name) private abstractModel: Model<AbstractDocument>,
  ) {}

  async create(createAbstractDto: any): Promise<AbstractDocument> {
    const createdAbstract = new this.abstractModel(createAbstractDto);
    return createdAbstract.save();
  }

  async findAll(): Promise<AbstractDocument[]> {
    return this.abstractModel.find().populate('conference').sort({ createdAt: -1 }).exec();
  }

  async findByConference(conferenceId: string): Promise<AbstractDocument[]> {
    return this.abstractModel.find({ conference: conferenceId }).exec();
  }

  async update(id: string, updateAbstractDto: any): Promise<AbstractDocument> {
    const updatedAbstract = await this.abstractModel
      .findByIdAndUpdate(id, updateAbstractDto, { new: true })
      .exec();
    if (!updatedAbstract) throw new NotFoundException('Abstract not found');
    return updatedAbstract;
  }
}
