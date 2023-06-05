/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class CreateFreelancerDTO {
    @ApiProperty()
    readonly  firstName: string;
    @ApiProperty()
    readonly  surname: string;
    @ApiProperty()
    readonly  gender: string;
    @ApiProperty()
    readonly  designation: string;
    @ApiProperty()
    readonly email: string;
    @ApiProperty()
    readonly  address: string;
    @ApiProperty()
    readonly hourlyRate: string; 
    @ApiProperty()
    readonly skills: number[]; // Array of role IDs
  }
  