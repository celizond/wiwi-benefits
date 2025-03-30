import { PartialType } from '@nestjs/mapped-types';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { OptionalDataBenefitDto } from '../../common/dto/optional-data-benefit.dto';
import { Benefit } from '../entities/benefit.entity';
import { RootFilterQuery } from 'mongoose';
import { UpdateBenefitDto } from './update-benefit.dto';

export class UpdateManyBenefitsDto extends PartialType(UpdateBenefitDto) {

    @ValidateNested()
    @Type(() => OptionalDataBenefitDto)
    filter: RootFilterQuery<Benefit>;
}
