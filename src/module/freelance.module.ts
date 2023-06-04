/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FreelanceSchema, Freelancer } from '../schema/freelance.schema';
import { FreelancerController } from '../controller/freelancer.controller';
import { FreelancerService } from '../services/freelancer.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Freelancer.name,
        schema: FreelanceSchema,
      },
    ]),
  ],
  controllers: [FreelancerController],
  providers: [FreelancerService],
})
export class FreelancerModule {}
