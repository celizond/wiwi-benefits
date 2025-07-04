import { IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DataBenefitDto } from "../../common/dto/data-benefit.dto";
import { MetaBenefitDto } from "../../common/dto/meta-benefit.dto";

export class CreateBenefitDto {

    @ValidateNested()
    @Type(() => DataBenefitDto)
    data: DataBenefitDto

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaBenefitDto)
    meta: MetaBenefitDto
}
