/* eslint-disable prettier/prettier */


import { Schema, Document, model } from 'mongoose';
import { Role } from './role.entity';

export interface User extends Document {
  username: string;
  password: string;
  email: string;
  roles: Role[];
}

const UserSchema = new Schema<User>({
  username: String,
  password: String,
  email: String,
  roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }],
});

export const UserModel = model<User>('User', UserSchema);
