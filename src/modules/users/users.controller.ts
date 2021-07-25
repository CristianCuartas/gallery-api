import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';
import { IGeneralResponse } from '../../interfaces/responses';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUserProfileById(@Query('userId') userId: string): IGeneralResponse {
    return this.usersService.getUserProfileById(userId);
  }

  @Get(':userName')
  getUserProfile(@Param('userName') userName: string): IGeneralResponse {
    return this.usersService.getUserProfile(userName);
  }

  @Post('sign-up')
  signUp(@Body() data: { email: string; password: string }): IGeneralResponse {
    return this.usersService.signUp(data);
  }
}
