/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RoleService } from '../services/role.service';
import { CreateRoleDto } from '../dto/create-role.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Roles')
@Controller('api/roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiOperation({ summary: 'Create a new role' })
  @ApiResponse({ status: 201, description: 'Role created successfully' })
  @ApiBody({ type: CreateRoleDto }) // Add this line
  @Post()
  createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.createRole(createRoleDto);
  }

  @ApiOperation({ summary: 'Get all roles' })
  @ApiResponse({ status: 200, description: 'Return all roles' })
  @Get()
  findAllRoles() {
    return this.roleService.findAllRoles();
  }

  @ApiOperation({ summary: 'Get a role by ID' })
  @ApiResponse({ status: 200, description: 'Return a role by ID' })
  @ApiResponse({ status: 404, description: 'Role not found' })
  @Get(':id')
  findRoleById(@Param('id') id: string) {
    return this.roleService.findRoleById(id);
  }

  @ApiOperation({ summary: 'Update a role by ID' })
  @ApiResponse({ status: 200, description: 'Role updated successfully' })
  @ApiResponse({ status: 404, description: 'Role not found' })
  @Put(':id')
  updateRoleById(
    @Param('id') id: string,
    @Body() updateRoleDto: CreateRoleDto,
  ) {
    return this.roleService.updateRoleById(id, updateRoleDto);
  }

  @ApiOperation({ summary: 'Delete a role by ID' })
  @ApiResponse({ status: 200, description: 'Role deleted successfully' })
  @ApiResponse({ status: 404, description: 'Role not found' })
  @Delete(':id')
  deleteRoleById(@Param('id') id: string) {
    return this.roleService.deleteRoleById(id);
  }
}
