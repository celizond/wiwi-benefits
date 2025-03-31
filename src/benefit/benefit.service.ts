import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuid } from "uuid";
import { Benefit } from './entities/benefit.entity';
import { UpdateBenefitDto } from './dto/update-benefit.dto';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { DeleteBenefitDto } from './dto/delete-benefit.dto';
import { DeleteManyBenefitsDto } from './dto/delete-many-benefits.dto';
import { UpdateManyBenefitsDto } from './dto/update-many-benefits.dto';

//Que hacer con meta

@Injectable()
export class BenefitService {

  constructor (
    @InjectModel(Benefit.name) //Nombre de modelo
    private readonly benefitModel: Model<Benefit> 
  ) {}

  private handleExceptions(error: any) {
    if(error.code === 11000) {
      throw new BadRequestException(`Benefit exists in db ${JSON.stringify(error.keyValue)}`)
    }
    throw new InternalServerErrorException(`Can't create Benefit - check server logs`)
  }

  private cleanObject(obj: Record<string, any>) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => value !== undefined)
    );
  }

  private filterItems(filter: any) {
    const cleanedFilter = this.cleanObject(filter);
    return cleanedFilter;
  }

  async create(createBenefitDto: CreateBenefitDto) {
    try {
      const idBenefit = uuid();
      const benefitWithId = {...createBenefitDto.data, idBenefit:idBenefit}
      const benefit = await this.benefitModel.create(benefitWithId);
      return `Created benefit:
      ${benefit}`;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findOne(id: string) {
    //habría que agregar otro valor de consulta? como el codigo de beneficio
    const benefitFound: Benefit | null = await this.benefitModel.findOne({ idBenefit: id });
    
    if ( benefitFound === null ) {
      throw new NotFoundException(`Benefit with id "${ id }" not found`);
    }
    
    return benefitFound;
  }

  async update(id: string, updateBenefitDto: UpdateBenefitDto) {
    const benefit = await this.findOne(id);
    try {
      await benefit.updateOne( updateBenefitDto.data, {new: true});
      return `Updated benefit:
      ${JSON.stringify({...benefit.toJSON(), ...updateBenefitDto.data }, null, 2)}`;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async updateMany(updateManyBenefitsDto: UpdateManyBenefitsDto) {
    const { filter, data } = updateManyBenefitsDto;
    const cleanedFilter = this.filterItems(filter);

    const { modifiedCount } = await this.benefitModel.updateMany(cleanedFilter, data);
    if ( modifiedCount === 0 )
      throw new BadRequestException('Not found benefit(s) with condition to update');
    return `Updated ${modifiedCount} benefit(s)`;
  }

  async remove(id: string, deleteBenefitDto: DeleteBenefitDto) {
    const { deletedCount } = await this.benefitModel.deleteOne({ idBenefit: id });
    if ( deletedCount === 0 )
      throw new BadRequestException(`Benefit with id "${ id }" not found`);
    return `Deleted benefit with id ${id}`;
  }

  async removeMany(deleteManyBenefitDto: DeleteManyBenefitsDto) {
    const { filter } = deleteManyBenefitDto;
    const cleanedFilter = this.filterItems(filter);

    const { deletedCount } = await this.benefitModel.deleteMany(cleanedFilter);
    if ( deletedCount === 0 )
      throw new BadRequestException('Not found benefit(s) with condition to delete');
    return `Deleted ${deletedCount} benefit(s)`;
  }

}
