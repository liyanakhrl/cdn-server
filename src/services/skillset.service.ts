/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skillset, SkillsetDocument } from '../entity/skillset.entity'; 
import { CreateSkillsetDto } from '../dto/create-skillset.dto';
import { UpdateSkillsetDto } from '../dto/update-skillset.dto';

@Injectable()
export class SkillsetService {
  constructor(
    @InjectModel(Skillset.name) private skillsetModel: Model<SkillsetDocument>,
  ) {}

  async createSkillset(createSkillsetDto: CreateSkillsetDto): Promise<Skillset> {
    const createdSkillset = new this.skillsetModel(createSkillsetDto);
    return createdSkillset.save();
  }

  async getAllSkillsets(): Promise<Skillset[]> {
    return this.skillsetModel.find().exec();
  }

  async getSkillsetById(id: string): Promise<Skillset> {
    return this.skillsetModel.findById(id).exec();
  }

  async updateSkillsetById(
    id: string,
    updateSkillsetDto: UpdateSkillsetDto,
  ): Promise<Skillset> {
    return this.skillsetModel.findByIdAndUpdate(id, updateSkillsetDto, {
      new: true,
    });
  }

  async deleteSkillsetById(id: string): Promise<Skillset> {
    return this.skillsetModel.findByIdAndDelete(id);
  }
}
