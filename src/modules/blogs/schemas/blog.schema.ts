import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;

@Schema({ timestamps: true })
export class Blog {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  excerpt: string;

  @Prop()
  coverImage: string;

  @Prop({ default: 'draft', enum: ['draft', 'published', 'archived'] })
  status: string;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop()
  author: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
