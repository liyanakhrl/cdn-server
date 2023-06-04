/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateSkillsetDto } from './create-skillset.dto';

export class UpdateSkillsetDto extends PartialType(CreateSkillsetDto) {}
