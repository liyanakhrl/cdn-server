/* eslint-disable prettier/prettier */
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { UserRole } from './user-role.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Role' }] })
  roles: UserRole[];
}

export const UserSchema = SchemaFactory.createForClass(User);
