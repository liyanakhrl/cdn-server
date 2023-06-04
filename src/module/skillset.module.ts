/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillsetSchema, Skillset } from '../schema/skillset.schema';
import { SkillsetController } from '../controller/skillset.controller';
import { SkillsetService } from '../services/skillset.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Skillset.name, schema: SkillsetSchema },
    ]),
  ],
  controllers: [SkillsetController],
  providers: [SkillsetService],
})
export class SkillsetModule {}
