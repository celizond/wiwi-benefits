import { Injectable } from '@nestjs/common';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { UpdateBenefitDto } from './dto/update-benefit.dto';
import { Benefit } from './entities/benefit.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BenefitsService {

  constructor (
    @InjectModel(Benefit.name) //Nombre de modelo
    private readonly benefitModel: Model<Benefit> 
  ) {}

  async create(createBenefitDto: CreateBenefitDto) {
    //createBenefitDto.commerce = createBenefitDto.commerce.toLowerCase();
      try {
        const benefit = await this.benefitModel.create(createBenefitDto);
        return benefit;
      } catch (error) {
        //this.handleExceptions(error);
      }
    }

  findAll() {
    return `This action returns all benefits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} benefit`;
  }

  update(id: number, updateBenefitDto: UpdateBenefitDto) {
    return `This action updates a #${id} benefit`;
  }

  remove(id: number) {
    return `This action removes a #${id} benefit`;
  }
}
