import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BenefitsModule } from './benefits/benefits.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/benefits',{
      dbName: 'benefits'
    }), 
    BenefitsModule, CommonModule,
  ],
})
export class AppModule {}
