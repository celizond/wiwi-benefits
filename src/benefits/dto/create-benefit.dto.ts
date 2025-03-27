import { IsDateString, IsInt, IsOptional, IsPositive, IsString, IsUUID, Min } from "class-validator";

export class CreateBenefitDto {

    /* @IsString()
    @IsUUID()
    id: string; */

    @IsInt()
    @IsPositive()
    @Min(1)
    points: number;

    @IsOptional()
    @IsInt()
    @IsPositive()
    @Min(1)   
    discountPercentage: number;

    @IsOptional()
    @IsDateString()
    startValidity: string;
        
    @IsOptional()
    @IsDateString()
    endValidity: string;
        
    @IsOptional()
    @IsString()
    commerce: string;
    
    @IsOptional()
    @IsInt()
    @IsPositive()
    @Min(1)
    couponCode: number;
        
}
