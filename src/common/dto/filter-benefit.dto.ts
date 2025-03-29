import { IsDateString, IsOptional, IsString } from "class-validator";
import { ComparisonOperators } from "./comparison-operators.dto";

export class FilterBenefitDto {

    @IsOptional()
    points?: ComparisonOperators | number;

    @IsOptional()
    discountPercentage?: ComparisonOperators | number;

    @IsOptional()
    startValidity?: ComparisonOperators | string;
            
    @IsOptional()
    endValidity?: ComparisonOperators | string;
            
    @IsOptional()
    @IsString()
    commerce?: string;
        
    @IsOptional()
    couponCode?: ComparisonOperators | number;
            
    @IsOptional()
    @IsString()
    imageUrl?: string;

}
