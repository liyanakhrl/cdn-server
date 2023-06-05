/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillDocument = Skill & Document;
@Schema()
export class Skill {
  @Prop({ required: true })
  name: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
