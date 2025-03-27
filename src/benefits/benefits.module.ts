import { Module } from '@nestjs/common';
import { BenefitsService } from './benefits.service';
import { BenefitsController } from './benefits.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Benefit, BenefitSchema } from './entities/benefit.entity';

@Module({
  controllers: [BenefitsController],
  providers: [BenefitsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Benefit.name,
        schema: BenefitSchema,
      }
    ])
  ],
  exports: [MongooseModule]
})
export class BenefitsModule {}
