/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/user.schema'; 
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../stratergy/constant';
import { HashService } from '../common/services/hash.service';
import { AuthService } from '../authenticate/auth.service';
import { JwtStrategy } from '../stratergy/jwt.stratergy';
import { LocalStrategy } from '../stratergy/local.stratergy';

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
  controllers: [UserController],
  providers: [
    UserService,
    HashService,
    AuthService,
    JwtStrategy,
    LocalStrategy,
  ],
})
export class UserModule {}
