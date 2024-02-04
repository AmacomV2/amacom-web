import { GenericDTO } from "@shared/models/GenericDTO";

export class LogroDTO extends GenericDTO{
  name: string;
  description: string;
  subjectId: number;
  subjectName: string;
}