import { Controller, Get, Query, Param } from '@nestjs/common';
import { IGeneralResponse } from '../../interfaces/responses';
import { GalleriesService } from './galleries.service';

@Controller('galleries')
export class GalleriesController {
  constructor(private readonly galleriesService: GalleriesService) {}

  @Get()
  getUserGallery(
    @Query('userName') userName: string,
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
  ): IGeneralResponse {
    return this.galleriesService.getUserGallery(limit, offset, userName);
  }

  @Get('gallery-image/:imageId')
  getUserImageGallery(@Param('imageId') imageId: string): IGeneralResponse {
    return this.galleriesService.getUserImageGallery(imageId);
  }
}
