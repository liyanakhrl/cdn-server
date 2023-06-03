/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

//import { Employee, EmployeeSchema } from './schema/employee.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { FreelanceSchema, Freelancer } from './freelance.schema';
import { FreelancerController } from './freelancer.controller';
import { FreelancerService } from './freelancer.service';

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
