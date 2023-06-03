/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateFreelancerDTO } from './create-freelancer.dto';
import { FreelancerService } from './freelancer.service';
import { UpdatFreelancerDto } from './update-freelancer.dto';

// @Controller('freelancer')

@Controller('api/freelancer')
export class FreelancerController {
  constructor(private readonly freelancerService: FreelancerService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateFreelancerDTO) {
    return this.freelancerService.create(createEmployeeDto);
  }

  
  @Get()
  findAll() {
    return this.freelancerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.freelancerService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFreelancerDto: UpdatFreelancerDto,
  ) {
    return this.freelancerService.update(id, updateFreelancerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.freelancerService.remove(id);
  }
}
