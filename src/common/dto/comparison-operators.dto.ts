import { IsInt, IsOptional, Min } from "class-validator";

export class ComparisonOperators {
    @IsOptional()
    @IsInt()
    @Min(1)
    $gt?: number;
    
    @IsOptional()
    @IsInt()
    @Min(1)
    $lt?: number;
    
    @IsOptional()
    @IsInt()
    @Min(1)
    $gte?: number;
    
    @IsOptional()
    @IsInt()
    @Min(1)
    $lte?: number;
  
    @IsOptional()
    @IsInt()
    @Min(1)
    $eq?: number;
  }
