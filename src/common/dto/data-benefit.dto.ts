import { IsDateString, IsInt, IsPositive, IsString, Min } from "class-validator";

export class DataBenefitDto {

    @IsInt()
    @IsPositive()
    @Min(1)
    points: number;

    @IsInt()
    @IsPositive()
    @Min(1)   
    discountPercentage: number;

    @IsDateString()
    startValidity: string;
        
    @IsDateString()
    endValidity: string;
        
    @IsString()
    commerce: string;
    
    @IsInt()
    @IsPositive()
    @Min(1)
    couponCode: number;
        
    @IsString()
    imageUrl: string;
}
