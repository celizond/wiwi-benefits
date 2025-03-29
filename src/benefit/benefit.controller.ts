import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BenefitService } from './benefit.service';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { UpdateBenefitDto } from './dto/update-benefit.dto';
import { DeleteBenefitDto } from './dto/delete-benefit.dto';
import { DeleteManyBenefitDto } from './dto/delete-many-benefits.dto';

@Controller('benefit')
export class BenefitController {
  constructor(private readonly benefitService: BenefitService) {}

  @Post()
  create(@Body() createBenefitDto: CreateBenefitDto) {
    return this.benefitService.create(createBenefitDto);
  }

  @Get()
  findAll() {
    return this.benefitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benefitService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBenefitDto: UpdateBenefitDto) {
    //Hay alguna manera para no tener que hacer un update-data-dto?
    return this.benefitService.update(id, updateBenefitDto);
  }

  @Delete(':id') //agregar delete
  remove(@Param('id') id: string, @Body() deleteBenefitDto: DeleteBenefitDto) {
    return this.benefitService.remove(id, deleteBenefitDto);
  }

  @Delete()
  removeMany(@Body() deleteManyBenefitDto: DeleteManyBenefitDto) {
    return this.benefitService.removeMany(deleteManyBenefitDto);
  }

}
