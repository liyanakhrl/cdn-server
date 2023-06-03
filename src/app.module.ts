import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './authenticate/auth.module';
import { FreelancerModule } from './freelance/freelance.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cdn_db'),
    UserModule,
    AuthModule,
    FreelancerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
