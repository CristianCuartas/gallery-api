import { IGeneralResponse } from '../../interfaces/responses';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GalleriesService {
  getUserGallery(
    limit: number,
    offset: number,
    userName: string,
  ): IGeneralResponse {
    const response: IGeneralResponse = { error: '', message: '', data: '' };
    try {
      if (userName) {
        response.data = {
          userName: userName,
          offset: offset,
          limit: limit,
        };
        response.message = `User found!`;
      } else {
        response.message = `User name invalid!`;
      }
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  getUserImageGallery(imageId: string): IGeneralResponse {
    const response: IGeneralResponse = { error: '', message: '', data: '' };
    try {
      response.data = {
        imageId: imageId,
      };
      response.message = `Image found!`;
    } catch (error) {
      response.error = error;
    }
    return response;
  }
}
