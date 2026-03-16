import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { AbstractsService } from './abstracts.service';

@Controller('abstracts')
export class AbstractsController {
  constructor(private readonly abstractsService: AbstractsService) {}

  @Post()
  create(@Body() createAbstractDto: any) {
    return this.abstractsService.create(createAbstractDto);
  }

  @Get()
  findAll(@Query('conferenceId') conferenceId?: string) {
    if (conferenceId) {
      return this.abstractsService.findByConference(conferenceId);
    }
    return this.abstractsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbstractDto: any) {
    return this.abstractsService.update(id, updateAbstractDto);
  }
}
