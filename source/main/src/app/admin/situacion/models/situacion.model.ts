import { GenericDTO } from '@shared/models/GenericDTO';

export class SituacionDTO extends GenericDTO {
  affectationDegree: number;
  babyAlarmSigns: string[];
  behavior: string;
  createdById: string;
  currentDiagnosis: CurrentDiagnosis;
  description: string;
  feelings: string[];
  firstThought: string;
  motherAlarmSigns: string[];
  nursingAssessment: string;
  personId: string;
  subjectId: string;
  subjectName: string;
}

export interface CurrentDiagnosis {
  consultationAlert: string;
  consultationResult: string;
  consultationStatus: string;
  id: string;
  personSituationId: string;
}

export interface SituacionSignAlrmDTO {
  id?: string;
  personSituationId: string;
  alarmSignId: string;
  alarmSignName?: string;
  alarmSignDescription?: string;
}
