import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UesrService } from './uesr.service';
import { CreateUesrDto } from './dto/create-uesr.dto';
import { UpdateUesrDto } from './dto/update-uesr.dto';

@Controller('uesr')
export class UesrController {
  constructor(private readonly uesrService: UesrService) {}

  @Post()
  create(@Body() createUesrDto: CreateUesrDto) {
    return this.uesrService.create(createUesrDto);
  }

  @Get()
  findAll() {
    return this.uesrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uesrService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUesrDto: UpdateUesrDto) {
    return this.uesrService.update(+id, updateUesrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uesrService.remove(+id);
  }
}
