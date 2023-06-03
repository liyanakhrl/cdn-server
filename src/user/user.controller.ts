/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
 
  @Post('/register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.registerUser(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':email')
  getUserByUserName(@Param('email') email : string) {
    return this.userService.getUserByUsername(email);
  } 
}
