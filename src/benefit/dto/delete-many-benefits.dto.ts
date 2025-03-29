import { PartialType } from '@nestjs/mapped-types';
import { ValidateNested } from 'class-validator';
import { DeleteBenefitDto } from './delete-benefit.dto';
import { Type } from 'class-transformer';
import { FilterBenefitDto } from 'src/common/dto/filter-benefit.dto';

export class DeleteManyBenefitDto extends PartialType(DeleteBenefitDto) {

    @ValidateNested()
    @Type(() => FilterBenefitDto)
    filter: FilterBenefitDto;

}
