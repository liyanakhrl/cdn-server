/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const FreelanceSchema = SchemaFactory.createForClass(Freelancer);
