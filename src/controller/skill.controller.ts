/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SkillService } from '../services/skill.service';
import { CreateSkillDTO } from '../dto/create-skill.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Skills')
@Controller('api/skills')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @ApiOperation({ summary: 'Create a new skill' })
  @ApiResponse({ status: 201, description: 'Skill created successfully' })
  @ApiBody({ type: CreateSkillDTO }) // Add this line
  @Post()
  createSkill(@Body() createSkillDto: CreateSkillDTO) {
    return this.skillService.createSkill(createSkillDto);
  }

  @ApiOperation({ summary: 'Get all skills' })
  @ApiResponse({ status: 200, description: 'Return all skills' })
  @Get()
  findAllSkills() {
    return this.skillService.findAllSkills();
  }

  @ApiOperation({ summary: 'Get a skill by ID' })
  @ApiResponse({ status: 200, description: 'Return a skill by ID' })
  @ApiResponse({ status: 404, description: 'Skill not found' })
  @Get(':id')
  findSkillById(@Param('id') id: string) {
    return this.skillService.findSkillById(id);
  }

  @ApiOperation({ summary: 'Update a skill by ID' })
  @ApiResponse({ status: 200, description: 'Skill updated successfully' })
  @ApiResponse({ status: 404, description: 'Skill not found' })
  @Put(':id')
  updateSkillById(
    @Param('id') id: string,
    @Body() updateSkillDto: CreateSkillDTO,
  ) {
    return this.skillService.updateSkillById(id, updateSkillDto);
  }

  @ApiOperation({ summary: 'Delete a skill by ID' })
  @ApiResponse({ status: 200, description: 'Skill deleted successfully' })
  @ApiResponse({ status: 404, description: 'Skill not found' })
  @Delete(':id')
  deleteSkillById(@Param('id') id: string) {
    return this.skillService.deleteSkillById(id);
  }
}
