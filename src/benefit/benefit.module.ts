import { Module } from '@nestjs/common';
import { BenefitService } from './benefit.service';
import { BenefitController } from './benefit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Benefit, BenefitSchema } from './entities/benefit.entity';

@Module({
  controllers: [BenefitController],
  providers: [BenefitService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Benefit.name,
        schema: BenefitSchema,
      }
    ])
  ],
  exports: []
})
export class BenefitModule {}
