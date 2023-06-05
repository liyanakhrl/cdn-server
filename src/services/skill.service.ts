/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill, SkillDocument } from  '../entity/skill.entity';
import { CreateSkillDTO } from '../dto/create-skill.dto';

@Injectable()
export class SkillService {
  constructor(
    @InjectModel(Skill.name) private skillModel: Model<SkillDocument>,
  ) {}

  async createSkill(createSkillDto: CreateSkillDTO): Promise<Skill> {
    const createdSkill = new this.skillModel(createSkillDto);
    return createdSkill.save();
  }

  async findAllSkills(): Promise<Skill[]> {
    return this.skillModel.find().exec();
  }

  async findSkillById(id: string): Promise<Skill> {
    return this.skillModel.findById(id).exec();
  }

  async updateSkillById(id: string, updateSkillDto: CreateSkillDTO): Promise<Skill> {
    return this.skillModel.findByIdAndUpdate(id, updateSkillDto, { new: true });
  }

  async deleteSkillById(id: string): Promise<Skill> {
    return this.skillModel.findByIdAndDelete(id);
  }
}
