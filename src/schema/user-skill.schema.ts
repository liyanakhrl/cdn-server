/* eslint-disable prettier/prettier */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose'; 
export type UserSkillDocument = UserSkill & Document;

@Schema()
export class UserSkill {
    @Prop({ type: Types.ObjectId, ref: 'User' })
    userId: string;
  
    @Prop({ type: Types.ObjectId, ref: 'Skill' })
    skillId: string;
  }

export const UserSkillSchema = SchemaFactory.createForClass(UserSkill);
