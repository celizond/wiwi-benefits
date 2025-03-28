import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class Benefit extends Document{

    @Prop({ type: String, default: function genUUID() {
        return uuidv4()
    }})
    idbenefit: string;

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
    
    @Prop({unique:false,index:true})
    imageUrl: string;

}
export const BenefitSchema = SchemaFactory.createForClass(Benefit);