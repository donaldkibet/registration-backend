import { Test, TestingModule } from '@nestjs/testing';
import { SubCountyController } from './sub-county.controller';

describe('SubCountyController', () => {
  let controller: SubCountyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubCountyController],
    }).compile();

    controller = module.get<SubCountyController>(SubCountyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
