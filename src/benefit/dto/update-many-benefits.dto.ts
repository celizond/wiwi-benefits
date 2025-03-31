import { PartialType } from '@nestjs/mapped-types';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { OptionalDataBenefitDto } from '../../common/dto/optional-data-benefit.dto';
import { CreateBenefitDto } from './create-benefit.dto';
import { FilterBenefitDto } from 'src/common/dto/filter-benefit.dto';

export class UpdateManyBenefitsDto extends PartialType(CreateBenefitDto) {

    @ValidateNested()
    @Type(() => OptionalDataBenefitDto)
    data: any;

    @ValidateNested()
    @Type(() => FilterBenefitDto)
    filter: FilterBenefitDto;
}
