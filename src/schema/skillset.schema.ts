/* eslint-disable prettier/prettier */
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document,Types } from 'mongoose';
import { Skill } from './skill.schema';

export type SkillsetDocument = Skillset & Document;

@Schema()
export class Skillset {
  @Prop({ required: true })
  category: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Skill' }] })
  skills: Skill[];
}

export const SkillsetSchema = SchemaFactory.createForClass(Skillset);
