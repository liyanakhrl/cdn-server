/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillsetDocument = Skillset & Document;

@Schema()
export class Skillset {
  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  subcategory: string;
}

export const SkillsetSchema = SchemaFactory.createForClass(Skillset);
