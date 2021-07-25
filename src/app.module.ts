import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { UsersController } from './modules/users/users.controller';
import { GalleriesController } from './modules/galleries/galleries.controller';
import { GalleriesService } from './modules/galleries/galleries.service';
import { UsersService } from './modules/users/users.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, GalleriesController],
  providers: [AppService, GalleriesService, UsersService],
})
export class AppModule {}
