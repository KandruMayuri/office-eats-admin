
import { CommonResponse } from '../../shared/models/common-response';
import { Restaurant } from '../restaurant/restaurant';
export interface Corporate {
  corporateId: number;
  corporateName: string;
  corporateAddress: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: number;
  corporateCountry: string;
  corporateState: string;
  corporateCity: string;
  Restaurant: Restaurant[];
}

export interface GetCorporatesResponse {
  obj_response: CommonResponse;
  result: Corporate [];
}
