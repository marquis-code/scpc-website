import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DynamicForm, DynamicFormDocument, FormResponse } from './schemas/form.schema';

@Injectable()
export class FormsService {
  constructor(
    @InjectModel(DynamicForm.name) private formModel: Model<DynamicFormDocument>,
    @InjectModel(FormResponse.name) private responseModel: Model<FormResponse>,
  ) {}

  async createForm(createFormDto: any): Promise<DynamicFormDocument> {
    const createdForm = new this.formModel(createFormDto);
    return createdForm.save();
  }

  async findAllForms(): Promise<DynamicFormDocument[]> {
    return this.formModel.find().exec();
  }

  async findFormById(id: string): Promise<DynamicFormDocument> {
    const form = await this.formModel.findById(id).exec();
    if (!form) throw new NotFoundException('Form not found');
    return form;
  }

  async submitResponse(submitDto: any): Promise<FormResponse> {
    const createdResponse = new this.responseModel(submitDto);
    return createdResponse.save();
  }

  async findResponsesByFormId(formId: string): Promise<FormResponse[]> {
    return this.responseModel.find({ formId }).sort({ createdAt: -1 }).exec();
  }
}
