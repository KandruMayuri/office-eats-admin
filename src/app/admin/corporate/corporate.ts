
import { CommonResponse } from '../../shared/models/common-response';
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
}

export interface GetCorporatesResponse {
  obj_response: CommonResponse;
  result: Corporate [];
}
