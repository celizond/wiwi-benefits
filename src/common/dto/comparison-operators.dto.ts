import { IsInt, IsOptional, Min } from "class-validator";

export class ComparisonOperators {
    @IsOptional()
    @IsInt()
    @Min(1)
    $gt?: number;  // Greater than
    
    @IsOptional()
    @IsInt()
    @Min(1)
    $lt?: number;  // Less than
    
    @IsOptional()
    @IsInt()
    @Min(1)
    $gte?: number; // Greater than or equal
    
    @IsOptional()
    @IsInt()
    @Min(1)
    $lte?: number; // Less than or equal
  
    @IsOptional()
    @IsInt()
    @Min(1)
    $eq?: number;  // Equal to
  }
