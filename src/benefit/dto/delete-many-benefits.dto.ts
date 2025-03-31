import { PartialType } from '@nestjs/mapped-types';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DeleteBenefitDto } from './delete-benefit.dto';
import { FilterBenefitDto } from 'src/common/dto/filter-benefit.dto';

export class DeleteManyBenefitsDto extends PartialType(DeleteBenefitDto) {

    @ValidateNested()
    @Type(() => FilterBenefitDto)
    filter: FilterBenefitDto;

}
