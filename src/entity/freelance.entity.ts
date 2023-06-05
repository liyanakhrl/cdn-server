/* eslint-disable prettier/prettier */
import { Schema, Document, model } from 'mongoose'; 
import { Skill } from './skill.entity';

export interface Freelancer extends Document {
  firstName: string;
  surname: string;
  gender: string;
  designation: string;
  email: string;
  address: string;
  hourlyRate: string;
  skills: Skill[];
}

const FreelancerSchema = new Schema<Freelancer>({
  firstName: String,
  surname: String,
  gender: String,
  designation: String,
  email: String,
  address: String,
  hourlyRate: String,
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skills' }],
});

export const FreelancerModel = model<Freelancer>('Freelancer', FreelancerSchema);
