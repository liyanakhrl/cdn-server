/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SkillsetService } from 'src/services/skillset.service';
import { CreateSkillsetDto } from '../dto/create-skillset.dto';
import { UpdateSkillsetDto } from '../dto/update-skillset.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Skillset')
@Controller('api/skillset')
export class SkillsetController {
  constructor(private readonly skillsetService: SkillsetService) {}

  @ApiOperation({ summary: 'Create a new skillset' })
  @ApiResponse({ status: 201, description: 'Skillset created successfully' })
  @ApiBody({ type: CreateSkillsetDto }) //
  @Post()
  createSkillset(@Body() createSkillsetDto: CreateSkillsetDto) {
    return this.skillsetService.createSkillset(createSkillsetDto);
  }

  @ApiOperation({ summary: 'Get all skillsets' })
  @ApiResponse({ status: 200, description: 'Return all skillsets' })
  @Get()
  getAllSkillsets() {
    return this.skillsetService.getAllSkillsets();
  }

  @ApiOperation({ summary: 'Get a skillset by ID' })
  @ApiResponse({ status: 200, description: 'Return a skillset by ID' })
  @ApiResponse({ status: 404, description: 'Skillset not found' })
  @Get(':id')
  getSkillsetById(@Param('id') id: string) {
    return this.skillsetService.getSkillsetById(id);
  }

  @ApiOperation({ summary: 'Update a skillset by ID' })
  @ApiResponse({ status: 200, description: 'Skillset updated successfully' })
  @ApiResponse({ status: 404, description: 'Skillset not found' })
  @Put(':id')
  updateSkillsetById(
    @Param('id') id: string,
    @Body() updateSkillsetDto: UpdateSkillsetDto,
  ) {
    return this.skillsetService.updateSkillsetById(id, updateSkillsetDto);
  }

  @ApiOperation({ summary: 'Delete a skillset by ID' })
  @ApiResponse({ status: 200, description: 'Skillset deleted successfully' })
  @ApiResponse({ status: 404, description: 'Skillset not found' })
  @Delete(':id')
  deleteSkillsetById(@Param('id') id: string) {
    return this.skillsetService.deleteSkillsetById(id);
  }
}
