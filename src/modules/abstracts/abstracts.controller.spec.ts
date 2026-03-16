import { Test, TestingModule } from '@nestjs/testing';
import { AbstractsController } from './abstracts.controller';

describe('AbstractsController', () => {
  let controller: AbstractsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbstractsController],
    }).compile();

    controller = module.get<AbstractsController>(AbstractsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
