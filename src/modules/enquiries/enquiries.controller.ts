import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EnquiriesService } from './enquiries.service';
import { FirebaseAuthGuard } from '../auth/firebase-auth.guard';

@Controller('enquiries')
export class EnquiriesController {
  constructor(private readonly enquiriesService: EnquiriesService) {}

  @Post()
  create(@Body() createEnquiryDto: any) {
    return this.enquiriesService.create(createEnquiryDto);
  }

  @Get()
  @UseGuards(FirebaseAuthGuard)
  findAll() {
    return this.enquiriesService.findAll();
  }

  @Get(':id')
  @UseGuards(FirebaseAuthGuard)
  findOne(@Param('id') id: string) {
    return this.enquiriesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(FirebaseAuthGuard)
  update(@Param('id') id: string, @Body() updateEnquiryDto: any) {
    return this.enquiriesService.update(id, updateEnquiryDto);
  }

  @Delete(':id')
  @UseGuards(FirebaseAuthGuard)
  remove(@Param('id') id: string) {
    return this.enquiriesService.delete(id);
  }
}
