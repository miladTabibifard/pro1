import { Injectable } from '@nestjs/common';
import { CreateUesrDto } from './dto/create-uesr.dto';
import { UpdateUesrDto } from './dto/update-uesr.dto';

@Injectable()
export class UesrService {
  create(createUesrDto: CreateUesrDto) {
    return 'This action adds a new uesr';
  }

  findAll() {
    return `This action returns all uesr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uesr`;
  }

  update(id: number, updateUesrDto: UpdateUesrDto) {
    return `This action updates a #${id} uesr`;
  }

  remove(id: number) {
    return `This action removes a #${id} uesr`;
  }
}
