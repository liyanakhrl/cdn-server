/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FreelanceDocument, Freelancer } from './freelance.schema';
import { CreateFreelancerDTO } from './create-freelancer.dto';
import { UpdatFreelancerDto } from './update-freelancer.dto';
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
}
