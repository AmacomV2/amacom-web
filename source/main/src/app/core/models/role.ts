export enum Role {
  All = 'ALL',
  Admin = 'ADMIN',
  Doctor = 'NURSING',
  Patient = 'USER',
}

export interface RoleResponseDTO {
  id: string;
  name: Role;
  description: string;
  enumRol: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
}
