/* eslint-disable prettier/prettier */
import { Schema, SchemaFactory, Prop, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Skillset } from './skillset.schema';

export type SkillDocument = Skill & Document;

@Schema()
export class Skill {
  @Prop({ required: true })
  subcategory: string;

  @Prop({ type: Types.ObjectId, ref: 'Skillset' })
  skillset: Skillset;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
