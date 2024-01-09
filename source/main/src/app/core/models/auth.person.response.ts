export interface PersonDTO {
  id: string;
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
  createdAt: string;
  updatedAt: string;
}
export interface GenderDTO {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  name: string;
}
export interface DocumentTypeDTO {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  name: string;
  acronym: string;
}
