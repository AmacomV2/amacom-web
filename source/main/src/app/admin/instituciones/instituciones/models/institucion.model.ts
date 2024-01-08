import { GenericDTO } from "@shared/models/GenericDTO";

export class InstitucionDTO extends GenericDTO{
  name: string;
  description: string;
  institutionTypeId: string;
  createdAt: string;
}