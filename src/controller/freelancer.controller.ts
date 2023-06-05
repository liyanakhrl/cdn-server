/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CreateFreelancerDTO } from '../dto/create-freelancer.dto';
import { FreelancerService } from '../services/freelancer.service';
import { UpdatFreelancerDto } from '../dto/update-freelancer.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@ApiTags('Freelancer')
@Controller('api/freelancer')
export class FreelancerController {
  constructor(private readonly freelancerService: FreelancerService) {}

  @ApiOperation({ summary: 'Create a freelancer' })
  @ApiResponse({ status: 201, description: 'Freelancer created successfully' })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createFreelanceDTO: CreateFreelancerDTO) {
    return this.freelancerService.create(createFreelanceDTO);
  }

  @ApiOperation({ summary: 'Get all freelancers' })
  @ApiResponse({ status: 200, description: 'Return all freelancers' })
  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.freelancerService.findAll();
  }

  @ApiOperation({ summary: 'Get a freelancer by ID' })
  @ApiResponse({ status: 200, description: 'Return a freelancer by ID' })
  @ApiResponse({ status: 404, description: 'Freelancer not found' })
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.freelancerService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a freelancer by ID' })
  @ApiResponse({ status: 200, description: 'Freelancer updated successfully' })
  @ApiResponse({ status: 404, description: 'Freelancer not found' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBody({ type: UpdatFreelancerDto }) //
  @Put(':id')
  update(@Param('id') id: string, @Body() updateFreelancerDto: UpdatFreelancerDto) {
    return this.freelancerService.update(id, updateFreelancerDto);
  }

  @ApiOperation({ summary: 'Delete a freelancer by ID' })
  @ApiResponse({ status: 200, description: 'Freelancer deleted successfully' })
  @ApiResponse({ status: 404, description: 'Freelancer not found' })
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.freelancerService.remove(id);
  }

  
  @ApiOperation({ summary: 'Update a freelancer skillset' })
  @Post(':freelanceId/skills/:skillsetId')
  assignFreelancerSkillset(
    @Param('freelanceId') freelanceId: any,
    @Param('skillsetId') skillsetId: any,
  ) {
    return this.freelancerService.assignSkillSet(freelanceId, skillsetId);
  }
}
