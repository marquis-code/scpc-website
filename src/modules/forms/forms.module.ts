import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import {
  DynamicForm,
  DynamicFormSchema,
  FormResponse,
  FormResponseSchema,
} from './schemas/form.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DynamicForm.name, schema: DynamicFormSchema },
      { name: FormResponse.name, schema: FormResponseSchema },
    ]),
  ],
  controllers: [FormsController],
  providers: [FormsService],
  exports: [FormsService],
})
export class FormsModule {}
