/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Role } from './role.schema';

export type UserRoleDocument = UserRole & Document;

@Schema()
export class UserRole {
    @Prop({ type: Types.ObjectId, ref: 'User' })
    userId: string;
  
    @Prop({ type: Types.ObjectId, ref: 'Role' })
    roleId: string;
  }

export const UserRoleSchema = SchemaFactory.createForClass(UserRole);
