/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from  '../user/user.schema'; 
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../stratergy/constant';
import { UserService } from '../user/user.service' ;
import { HashService } from '../common/services/hash.service'
import { LocalStrategy } from  '../stratergy/local.stratergy'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60d',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, HashService],
})
export class AuthModule {}
