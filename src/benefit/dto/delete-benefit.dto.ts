import { IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MetaBenefitDto } from "../../common/dto/meta-benefit.dto";

export class DeleteBenefitDto {

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaBenefitDto)
    meta: MetaBenefitDto
}
