/* eslint-disable prettier/prettier */
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({required: true,})
  username: string;
  @Prop({
    required: true,
  })
  password: string;
  email:string;
  roldId:any
}

export const UserSchema = SchemaFactory.createForClass(User);