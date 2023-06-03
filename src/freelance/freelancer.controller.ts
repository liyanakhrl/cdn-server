/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateFreelancerDTO } from './create-freelancer.dto';
import { FreelancerService } from './freelancer.service';
import { UpdatFreelancerDto } from './update-freelancer.dto';
import { AuthGuard } from '@nestjs/passport';

// @Controller('freelancer')

@Controller('api/freelancer')
export class FreelancerController {
  constructor(private readonly freelancerService: FreelancerService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createFreelanceDTO: CreateFreelancerDTO) {
    return this.freelancerService.create(createFreelanceDTO);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.freelancerService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.freelancerService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFreelancerDto: UpdatFreelancerDto,
  ) {
    return this.freelancerService.update(id, updateFreelancerDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.freelancerService.remove(id);
  }
}
