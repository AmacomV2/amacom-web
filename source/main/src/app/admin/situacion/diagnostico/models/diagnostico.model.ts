import { GenericDTO } from "@shared/models/GenericDTO";

export class DiagnosticoDTO extends GenericDTO {
  personSituationId: string;
  consultationResult: string;
  consultationAlert: ConsultationAlert;
  consultationStatus: ConsultationStatus;
}

export enum ConsultationStatus {
  PENDING,
  IN_PROGRESS,
  COMPLETED,
}

export enum ConsultationAlert {
  INFORMATION,
  TO_REVIEW,
  URGENT
}