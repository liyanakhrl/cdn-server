/* eslint-disable prettier/prettier */
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HashService } from '../common/services/hash.service';
import { User, UserDocument } from '../schema/user.schema';
import { Role, RoleDocument } from '../schema/role.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
    private hashService: HashService,
  ) {}

  async getUserByUsername(username: string) {
    return this.userModel
      .findOne({
        username,
      })
      .exec();
  }

  async registerUser(createUserDto: CreateUserDto) {
    // validate DTO

    const createUser = new this.userModel(createUserDto);
    // check if user exists
    const user = await this.getUserByUsername(createUser.username);
    if (user) {
      throw new BadRequestException();
    }
    // Hash Password
    createUser.password = await this.hashService.hashPassword(
      createUser.password,
    );

    return createUser.save();
  }

  // async assignUserRole(userId: string, roleId: any) {
  //   const user = await this.userModel.findById(userId).exec();
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }
  //   user.roles.push(roleId);
  //   return user.save();
  // }

  async assignUserRole(userId: string, roleId: any) {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    // Check if the role already exists for the user
    const existingRoleIndex = user.roles.findIndex((role) => role.toString() === roleId);
    if (existingRoleIndex !== -1) {
      return user.save();
      // Remove the role if it already exists
      // user.roles = user.roles.filter((_, index) => index !== existingRoleIndex);
    } else {
      // Add the role if it does not exist
      user.roles.push(roleId);
    }
  
    return user.save();
  }
  
  
}
