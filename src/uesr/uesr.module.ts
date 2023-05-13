import { Module } from '@nestjs/common';
import { UesrService } from './uesr.service';
import { UesrController } from './uesr.controller';

@Module({
  controllers: [UesrController],
  providers: [UesrService]
})
export class UesrModule {}
