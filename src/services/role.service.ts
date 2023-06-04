/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role, RoleDocument } from  '../entity/role.entity';
import { CreateRoleDto } from '../dto/create-role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
  ) {}

  async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
    const createdRole = new this.roleModel(createRoleDto);
    return createdRole.save();
  }

  async findAllRoles(): Promise<Role[]> {
    return this.roleModel.find().exec();
  }

  async findRoleById(id: string): Promise<Role> {
    return this.roleModel.findById(id).exec();
  }

  async updateRoleById(id: string, updateRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleModel.findByIdAndUpdate(id, updateRoleDto, { new: true });
  }

  async deleteRoleById(id: string): Promise<Role> {
    return this.roleModel.findByIdAndDelete(id);
  }
}
