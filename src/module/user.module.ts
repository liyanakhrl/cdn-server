/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserController } from '../controller/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schema/user.schema'; 
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../stratergy/constant';
import { HashService } from '../common/services/hash.service';
import { AuthService } from '../services/auth.service';
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
