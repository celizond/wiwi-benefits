import { PartialType } from '@nestjs/mapped-types';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateBenefitDto } from './create-benefit.dto';
import { DataBenefitUpdateDto } from './data-benefit-update.dto';

export class UpdateBenefitDto extends PartialType(CreateBenefitDto) {

    @ValidateNested()
    @Type(() => DataBenefitUpdateDto)
    data: DataBenefitUpdateDto;
}
