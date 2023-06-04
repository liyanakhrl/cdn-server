/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, UseGuards, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiResponse, ApiBadRequestResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('User')
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User registered successfully' })
  @ApiBody({ type: CreateUserDto }) //
  @ApiBadRequestResponse({ description: 'Invalid request body' })
  @Post('/register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.registerUser(createUserDto);
  }

  @ApiOperation({ summary: 'Get a user by email' })
  @ApiResponse({ status: 200, description: 'Return a user by email' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @UseGuards(AuthGuard('jwt'))
  @Get(':email')
  getUserByUserName(@Param('email') email: string) {
    return this.userService.getUserByUsername(email);
  }

  @Post(':userId/roles/:roleId')
  assignUserRole(
    @Param('userId') userId: any,
    @Param('roleId') roleId: any,
  ) {
    return this.userService.assignUserRole(userId, roleId);
  }

  
}
