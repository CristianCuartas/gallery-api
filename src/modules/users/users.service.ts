import { IGeneralResponse } from '../../interfaces/responses';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUserProfile(userName: string): IGeneralResponse {
    const response: IGeneralResponse = { error: '', message: '', data: '' };
    try {
      response.data = {
        userName: userName,
      };
      response.message = `User found!`;
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  getUserProfileById(userId: string): IGeneralResponse {
    const response: IGeneralResponse = { error: '', message: '', data: '' };
    try {
      if (userId) {
        response.data = {
          userId: userId,
        };
        response.message = `User found!`;
      } else {
        response.message = `User ID invalid!`;
      }
    } catch (error) {
      response.error = error;
    }
    return response;
  }

  signUp(data: { email: string; password: string }): IGeneralResponse {
    const response: IGeneralResponse = { error: '', message: '', data: '' };
    const { email, password } = data;
    try {
      response.data = {
        email: email,
        password: password,
      };
      response.message = 'User saved successfully';
    } catch (error) {
      response.error = error;
    }
    return response;
  }
}
