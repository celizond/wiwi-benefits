import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BenefitService } from './benefit.service';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { UpdateBenefitDto } from './dto/update-benefit.dto';
import { DeleteBenefitDto } from './dto/delete-benefit.dto';
import { DeleteManyBenefitsDto } from './dto/delete-many-benefits.dto';
import { UpdateManyBenefitsDto } from './dto/update-many-benefits.dto';
import { ObtainBenefitDto } from './dto/obtain-benefit.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ObtainManyBenefitsDto } from './dto/obtain-many-benefits.dto';

@Controller('benefit')
export class BenefitController {
  constructor(private readonly benefitService: BenefitService) {}

  @Post()
  create(@Body() createBenefitDto: CreateBenefitDto) {
    return this.benefitService.create(createBenefitDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Body() obtainBenefitDto: ObtainBenefitDto) {
    return this.benefitService.find(id, obtainBenefitDto);
  }

  @Get()
  findAll(@Query() queries: ObtainManyBenefitsDto, @Body() obtainBenefitDto: ObtainBenefitDto) {
    return this.benefitService.findAll(queries, obtainBenefitDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBenefitDto: UpdateBenefitDto) {
    return this.benefitService.update(id, updateBenefitDto);
  }

  @Patch()
  updateMany(@Body() updateManyBenefitsDto: UpdateManyBenefitsDto) {
    return this.benefitService.updateMany(updateManyBenefitsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() deleteBenefitDto: DeleteBenefitDto) {
    return this.benefitService.remove(id, deleteBenefitDto);
  }

  @Delete()
  removeMany(@Body() deleteManyBenefitsDto: DeleteManyBenefitsDto) {
    return this.benefitService.removeMany(deleteManyBenefitsDto);
  }
  
}
