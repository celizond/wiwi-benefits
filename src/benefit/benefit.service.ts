import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Benefit } from './entities/benefit.entity';
import { UpdateBenefitDto } from './dto/update-benefit.dto';
import { DataBenefitDto } from './dto/data-benefit.dto';
import { v4 as uuid } from "uuid";

@Injectable()
export class BenefitService {

  constructor (
    @InjectModel(Benefit.name) //Nombre de modelo
    private readonly benefitModel: Model<Benefit> 
  ) {}

  async create(dataBenefitDto: DataBenefitDto) {
      try {
        const idBenefit = uuid();
        const benefitWithId = {...dataBenefitDto, idBenefit:idBenefit}
        const benefit = await this.benefitModel.create(benefitWithId);
        return `Created benefit:
        ${benefit}`;
      } catch (error) {
        this.handleExceptions(error);
      }
    }

  findAll() {
    return `This action returns all benefits`;
  }

  async findOne(id: string) {
    //habría que agregar otro valor de consulta? como el codigo de beneficio
    const benefitFound: Benefit | null = await this.benefitModel.findOne({ idBenefit: id });
    
    if ( benefitFound === null ) {
      throw new NotFoundException(`Benefit with id "${ id }" not found`);
    }
    
    return benefitFound;
  }

  update(id: number, updateBenefitDto: UpdateBenefitDto) {
    return `This action updates a #${id} benefit`;
  }

  remove(id: number) {
    return `This action removes a #${id} benefit`;
  }

  private handleExceptions(error: any) {
    if(error.code === 11000) {
      throw new BadRequestException(`Benefit exists in db ${JSON.stringify(error.keyValue)}`)
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Benefit - check server logs`)
  }
}
