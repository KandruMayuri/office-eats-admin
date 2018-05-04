import { CommonResponse } from './common-response';

export interface User {
  u_email: string;
  u_password: string;
}

export interface SignInResponse {
  obj_response: CommonResponse;
  id: number;
  token: string;
}
