/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { SkillController } from 'src/controller/skill.controller';
import { Skill, SkillSchema } from 'src/entity/skill.entity';
import { SkillService } from 'src/services/skill.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Skill.name, schema: SkillSchema }]),
  ],
  controllers: [SkillController],
  providers: [SkillService],
})
export class SkillModule {}
