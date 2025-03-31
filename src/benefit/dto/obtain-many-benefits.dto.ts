import { IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PartialType } from "@nestjs/mapped-types";
import { ObtainBenefitDto } from "./obtain-benefit.dto";
import { PaginationDto } from "src/common/dto/pagination.dto";

type SortDirection = "asc" | "desc";

export class ObtainAllBenefitsDto extends PartialType(ObtainBenefitDto) {

    @IsOptional()
    @ValidateNested()
    @Type(() => PaginationDto)
    pagination: PaginationDto;

    @IsOptional()
    @IsString()
    sort: string | { [key: string]: SortDirection } | [string, SortDirection][];

}
