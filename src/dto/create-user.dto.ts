/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

 
export class CreateUserDto {
  
  @ApiProperty()
  readonly username: string;
  
  @ApiProperty()
  readonly password: string;
  
  @ApiProperty()
  readonly email: string;
  
  @ApiProperty()
  readonly roles: number[]; // Array of role IDs
}
