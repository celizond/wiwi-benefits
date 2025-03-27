import { IsDateString, IsInt, IsObject, IsOptional, IsPositive, IsString, IsUUID, Min, ValidateNested } from "class-validator";
import { DataBenefitDto } from "./data-benefit.dto";
import { MetaBenefitDto } from "./meta-benefit.dto";
import { Type } from "class-transformer";

export class CreateBenefitDto {

    @ValidateNested()
    @Type(() => DataBenefitDto)
    data!: DataBenefitDto

    @IsOptional()
    @ValidateNested()
    @Type(() => MetaBenefitDto)
    meta: MetaBenefitDto
    /* @IsString()
    @IsUUID()
    id: string; */
}
