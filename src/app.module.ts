import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './module/user.module';
import { AuthModule } from './module/auth.module';
import { FreelancerModule } from './module/freelance.module';
import { RoleModule } from './module/role.module';
import { SkillsetModule } from './module/skillset.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cdn_db'),
    UserModule,
    AuthModule,
    FreelancerModule,
    RoleModule,
    SkillsetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
