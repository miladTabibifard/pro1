import { Test, TestingModule } from '@nestjs/testing';
import { UesrController } from './uesr.controller';
import { UesrService } from './uesr.service';

describe('UesrController', () => {
  let controller: UesrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UesrController],
      providers: [UesrService],
    }).compile();

    controller = module.get<UesrController>(UesrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
