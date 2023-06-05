/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,Types } from 'mongoose'; 
import { Skill } from './skill.schema';

export type FreelanceDocument = Freelancer & Document;

@Schema()
export class Freelancer {
  @Prop()
  firstName: string;

  @Prop()
  surname: string;

  @Prop()
  designation: string;

  @Prop()
  email: string;

  @Prop()
  address: string;

  @Prop()
  hourlyRate: string;

  @Prop()
  gender: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Skill' }] })
  skillsets: Skill[];
}

export const FreelanceSchema = SchemaFactory.createForClass(Freelancer);
