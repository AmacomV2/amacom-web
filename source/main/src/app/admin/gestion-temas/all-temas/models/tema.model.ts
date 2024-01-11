import { GenericDTO } from "@shared/models/GenericDTO";

export class TemaDTO extends GenericDTO {
  name: string;
  validityIndicator: string;
  parentId: string;
  parent: TemaDTO;
}