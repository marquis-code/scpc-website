import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { FormsService } from './forms.service';
import { FirebaseAuthGuard } from '../auth/firebase-auth.guard';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post()
  @UseGuards(FirebaseAuthGuard)
  create(@Body() createFormDto: any) {
    return this.formsService.createForm(createFormDto);
  }

  @Get()
  findAll() {
    return this.formsService.findAllForms();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formsService.findFormById(id);
  }

  @Post(':id/submit')
  submit(@Param('id') formId: string, @Body() submissionData: any) {
    return this.formsService.submitResponse({ formId, data: submissionData });
  }

  @Get(':id/responses')
  @UseGuards(FirebaseAuthGuard)
  getResponses(@Param('id') formId: string) {
    return this.formsService.findResponsesByFormId(formId);
  }
}
