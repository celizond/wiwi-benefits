import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BenefitModule } from './benefit/benefit.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/benefits',{
      dbName: 'benefits'
    }), 
    BenefitModule, CommonModule,
  ],
})
export class AppModule {}
