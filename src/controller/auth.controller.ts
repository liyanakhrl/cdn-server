/* eslint-disable prettier/prettier */
import { AuthService } from '../services/auth.service';
import { Controller, Request, UseGuards, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Login' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // @ApiOperation({ summary: 'Logout' })
  // @ApiResponse({ status: 200, description: 'Logout successful' })
  // @UseGuards(AuthGuard('jwt'))
  // @Post('/logout')
  // async logout(@Request() req) {
  //   await this.authService.logout();
  //   return { message: 'Logout successful' };
  // }
}
