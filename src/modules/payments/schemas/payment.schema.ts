import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema({ timestamps: true })
export class Payment {
  @Prop({ required: true })
  reference: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  email: string;

  @Prop({ type: Types.ObjectId, ref: 'Member' })
  member: Types.ObjectId;

  @Prop({ required: true })
  purpose: string; // e.g., 'Membership Fee', 'Conference Registration'

  @Prop({ default: 'pending', enum: ['pending', 'successful', 'failed'] })
  status: string;

  @Prop({ type: Object })
  metadata: Record<string, any>;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
