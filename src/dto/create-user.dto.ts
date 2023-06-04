/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { User } from '../entity/user.entity';

// export class CreateUserDto extends User {}
export class CreateUserDto {
  readonly username: string;
  readonly password: string;
  readonly email: string;
  readonly roles: number[]; // Array of role IDs
}
