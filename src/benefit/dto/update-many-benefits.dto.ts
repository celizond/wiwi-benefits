import { PartialType } from '@nestjs/mapped-types';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { OptionalDataBenefitDto } from '../../common/dto/optional-data-benefit.dto';
import { Benefit } from '../entities/benefit.entity';
import { RootFilterQuery } from 'mongoose';

export class UpdateManyBenefitsDto extends PartialType(OptionalDataBenefitDto) {

    @ValidateNested()
    @Type(() => OptionalDataBenefitDto)
    filter: RootFilterQuery<Benefit>;
    //Como debería ser el filtro? que posibles datos tiene
}
