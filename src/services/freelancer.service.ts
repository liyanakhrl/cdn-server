/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FreelanceDocument, Freelancer } from '../schema/freelance.schema';
import { CreateFreelancerDTO } from '../dto/create-freelancer.dto';
import { UpdatFreelancerDto } from '../dto/update-freelancer.dto';
@Injectable()
export class FreelancerService {
  constructor(
    @InjectModel(Freelancer.name)
    private readonly freelancerModel: Model<FreelanceDocument>,
  ) {}

  async create(
    createFreelancerDto: CreateFreelancerDTO,
  ): Promise<FreelanceDocument> {
    const freelancer = new this.freelancerModel(createFreelancerDto);
    return freelancer.save();
  }

  async findAll(): Promise<FreelanceDocument[]> {
    return this.freelancerModel.find().exec();
  }

  async findOne(id: string) {
    return this.freelancerModel.findById(id);
  }

  async update(
    id: string,
    updateFreelancerDto: UpdatFreelancerDto,
  ): Promise<FreelanceDocument> {
    return this.freelancerModel.findByIdAndUpdate(id, updateFreelancerDto);
  }

  async remove(id: string) {
    return this.freelancerModel.findByIdAndRemove(id);
  }

  async assignSkillSet(freelancerId: string, skillId: any) {
    const freelancer = await this.freelancerModel.findById(freelancerId).exec();
    if (!freelancer) {
      throw new NotFoundException('Freelancer not found');
    }  
    // Check if the role already exists for the user
    const existingSkillIndex = freelancer.skillsets.findIndex((skill) => skill.toString() === skillId);
    if (existingSkillIndex !== -1) {
      return freelancer.save();
      // Remove the role if it already exists
      // user.roles = user.roles.filter((_, index) => index !== existingSkillIndex);
    } else {
      // Add the role if it does not exist
      freelancer.skillsets.push(skillId);
    }
  
    return freelancer.save();
  }
}
