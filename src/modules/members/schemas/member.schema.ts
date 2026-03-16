import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MemberDocument = Member & Document;

@Schema({ timestamps: true })
export class Member {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  membershipId: string;

  @Prop({ default: 'regular', enum: ['regular', 'student', 'fellow', 'admin'] })
  role: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop()
  organization: string;

  @Prop()
  firebaseUid: string;

  @Prop()
  profileImage: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
