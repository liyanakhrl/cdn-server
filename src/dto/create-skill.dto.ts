/* eslint-disable prettier/prettier */ 
import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class CreateSkillDTO {
    @ApiProperty()
    name: string;
  }
  