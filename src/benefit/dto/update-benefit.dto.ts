import { PartialType } from '@nestjs/mapped-types';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateBenefitDto } from './create-benefit.dto';
import { OptionalDataBenefitDto } from '../../common/dto/optional-data-benefit.dto';

export class UpdateBenefitDto extends PartialType(CreateBenefitDto) {

    @ValidateNested()
    @Type(() => OptionalDataBenefitDto)
    data: OptionalDataBenefitDto;
}
