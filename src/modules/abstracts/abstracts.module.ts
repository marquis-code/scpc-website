import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AbstractsService } from './abstracts.service';
import { AbstractsController } from './abstracts.controller';
import { Abstract, AbstractSchema } from './schemas/abstract.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Abstract.name, schema: AbstractSchema }]),
  ],
  controllers: [AbstractsController],
  providers: [AbstractsService],
  exports: [AbstractsService],
})
export class AbstractsModule {}
