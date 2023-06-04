/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthController } from '../controller/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from  '../schema/user.schema'; 
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../stratergy/constant';
import { UserService } from '../services/user.service' ;
import { HashService } from '../common/services/hash.service'
import { LocalStrategy } from  '../stratergy/local.stratergy'
import { Role, RoleSchema } from 'src/schema/role.schema';
import { RoleService } from 'src/services/role.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      { name: Role.name, schema: RoleSchema },
    ]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60d',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, HashService,RoleService],
})
export class AuthModule {}
