import { IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DataBenefitDto } from "../../common/dto/data-benefit.dto";
import { MetaBenefitDto } from "../../common/dto/meta-benefit.dto";
import { FilterBenefitDto } from "src/common/dto/filter-benefit.dto";

export class ObtainBenefitDto {

    @IsOptional()
    @ValidateNested()
    @Type(() => FilterBenefitDto)
    filter: FilterBenefitDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaBenefitDto)
    meta: MetaBenefitDto
}
