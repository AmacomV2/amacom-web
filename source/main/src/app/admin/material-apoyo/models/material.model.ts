import { GenericDTO } from '@shared/models/GenericDTO';

export class MaterialDTO extends GenericDTO {
  name: string;
  description: string;
  path: string;
}
