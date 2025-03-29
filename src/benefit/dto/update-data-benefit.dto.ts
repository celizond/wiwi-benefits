import { IsDateString, IsInt, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class DataBenefitUpdateDto {

    @IsOptional()
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
        
    @IsOptional()
    @IsString()
    imageUrl: string;
}
