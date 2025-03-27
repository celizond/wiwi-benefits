import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BenefitsModule } from './benefits/benefits.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/benefits',{
      dbName: 'benefits'
    }), 
    BenefitsModule,
  ],
})
export class AppModule {}
