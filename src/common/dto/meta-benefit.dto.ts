import { IsString } from "class-validator";

export class MetaBenefitDto {

    @IsString()
    description?: string; 

}
