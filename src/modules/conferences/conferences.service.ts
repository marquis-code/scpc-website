import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { Conference, ConferenceDocument } from './schemas/conference.schema';

@Injectable()
export class ConferencesService {
  constructor(
    @InjectModel(Conference.name) private conferenceModel: Model<ConferenceDocument>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(createConferenceDto: any): Promise<ConferenceDocument> {
    const createdConference = new this.conferenceModel(createConferenceDto);
    await this.cacheManager.del('all_conferences');
    return createdConference.save();
  }

  async findAll(): Promise<ConferenceDocument[]> {
    const cachedData = await this.cacheManager.get<ConferenceDocument[]>('all_conferences');
    if (cachedData) return cachedData;

    const conferences = await this.conferenceModel.find().sort({ startDate: 1 }).exec();
    await this.cacheManager.set('all_conferences', conferences, 3600); // 1 hour cache
    return conferences;
  }

  async findOne(id: string): Promise<ConferenceDocument> {
    const conference = await this.conferenceModel.findById(id).exec();
    if (!conference) throw new NotFoundException('Conference not found');
    return conference;
  }

  async update(id: string, updateConferenceDto: any): Promise<ConferenceDocument> {
    const updatedConference = await this.conferenceModel
      .findByIdAndUpdate(id, updateConferenceDto, { new: true })
      .exec();
    if (!updatedConference) throw new NotFoundException('Conference not found');
    return updatedConference;
  }

  async delete(id: string): Promise<any> {
    const result = await this.conferenceModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Conference not found');
    return result;
  }
}
