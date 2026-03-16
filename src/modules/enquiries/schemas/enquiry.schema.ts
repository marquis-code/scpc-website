import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EnquiryDocument = Enquiry & Document;

@Schema({ timestamps: true })
export class Enquiry {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  subject: string;

  @Prop({ required: true })
  message: string;

  @Prop({ default: 'new', enum: ['new', 'read', 'responded', 'resolved'] })
  status: string;

  @Prop()
  adminNotes: string;
}

export const EnquirySchema = SchemaFactory.createForClass(Enquiry);
