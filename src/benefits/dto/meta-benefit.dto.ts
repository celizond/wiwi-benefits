import { IsDateString, IsOptional, IsString } from "class-validator";

export class MetaBenefitDto {
        
   /*  @IsOptional()
    @IsDateString()
    date: string; */

    @IsString()
    description: string; 

}
