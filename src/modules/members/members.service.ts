import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member, MemberDocument } from './schemas/member.schema';

@Injectable()
export class MembersService {
  constructor(
    @InjectModel(Member.name) private memberModel: Model<MemberDocument>,
  ) {}

  async create(createMemberDto: any): Promise<MemberDocument> {
    const createdMember = new this.memberModel(createMemberDto);
    return createdMember.save();
  }

  async findAll(): Promise<MemberDocument[]> {
    return this.memberModel.find().exec();
  }

  async findOne(id: string): Promise<MemberDocument> {
    const member = await this.memberModel.findById(id).exec();
    if (!member) throw new NotFoundException('Member not found');
    return member;
  }

  async findByEmail(email: string): Promise<MemberDocument | null> {
    return this.memberModel.findOne({ email }).exec();
  }

  async update(id: string, updateMemberDto: any): Promise<MemberDocument> {
    const updatedMember = await this.memberModel
      .findByIdAndUpdate(id, updateMemberDto, { new: true })
      .exec();
    if (!updatedMember) throw new NotFoundException('Member not found');
    return updatedMember;
  }

  async delete(id: string): Promise<any> {
    const result = await this.memberModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Member not found');
    return result;
  }
}
