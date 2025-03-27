import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Benefit extends Document{

    /* @Prop({unique:false,index:true})
    id: string; */

    @Prop({unique:false,index:true})
    points: number;

    @Prop({unique:false,index:true})
    discountPercentage: number;

    @Prop({unique:false,index:true})
    startValidity: string;
    
    @Prop({unique:false,index:true})
    endValidity: string;
    
    @Prop({unique:false,index:true})
    commerce: string;

    @Prop({unique:true,index:true})
    couponCode: number;
    
    /* @Prop({unique:false,index:true})
    image: string; */

}
export const BenefitSchema = SchemaFactory.createForClass(Benefit);