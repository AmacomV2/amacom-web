import { DocumentTypeDTO, GenderDTO } from '@core/models/auth.person.response';
import { GenericDTO } from '@shared/models/GenericDTO';

export class PersonaList extends GenericDTO {
  name: string;
  documentType: DocumentTypeDTO;
  documentTypeId: string;
  gender: GenderDTO;
  genderId: string;
  civilStatus?: any;
  civilStatusId?: any;
  documentNo: string;
  fullName: string;
  lastName: string;
  address: string;
  occupation?: any;
  birthDate: string;
  consentText: boolean;
  privacyPolicy: boolean;
  evaluationCompleted: boolean;
  imageUrl?: any;
}
