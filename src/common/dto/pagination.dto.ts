import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {

    @IsPositive()
    @IsNumber()
    @Min(1)
    perPage: number;

    @IsPositive()
    @IsNumber()
    page: number;
}