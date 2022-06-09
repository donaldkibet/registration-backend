import { Test, TestingModule } from '@nestjs/testing';
import { CountyController } from './county.controller';

describe('CountyController', () => {
  let controller: CountyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountyController],
    }).compile();

    controller = module.get<CountyController>(CountyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
