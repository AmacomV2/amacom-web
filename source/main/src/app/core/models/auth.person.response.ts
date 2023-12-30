export interface PersonDTO {
  id: string;
  name: string;
  documentType: DocumentType;
  documentTypeId: string;
  gender: Gender;
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
export interface Gender {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  name: string;
}
export interface DocumentType {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  name: string;
  acronym: string;
}
