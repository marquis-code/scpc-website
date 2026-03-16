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
import { ConferencesService } from './conferences.service';
import { FirebaseAuthGuard } from '../auth/firebase-auth.guard';

@Controller('conferences')
export class ConferencesController {
  constructor(private readonly conferencesService: ConferencesService) {}

  @Post()
  @UseGuards(FirebaseAuthGuard)
  create(@Body() createConferenceDto: any) {
    return this.conferencesService.create(createConferenceDto);
  }

  @Get()
  findAll() {
    return this.conferencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conferencesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(FirebaseAuthGuard)
  update(@Param('id') id: string, @Body() updateConferenceDto: any) {
    return this.conferencesService.update(id, updateConferenceDto);
  }

  @Delete(':id')
  @UseGuards(FirebaseAuthGuard)
  remove(@Param('id') id: string) {
    return this.conferencesService.delete(id);
  }
}
