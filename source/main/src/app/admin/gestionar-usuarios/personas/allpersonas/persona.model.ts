import { DocumentTypeDTO, GenderDTO } from '@core/models/auth.person.response';
import { GenericDTO } from '@shared/models/GenericDTO';

export class PersonaList extends GenericDTO {
  // nombre: string;
  // apellido: string;
  // tipoDocumento: string;
  // numeroDocumento: number;
  // genero: string;
  // direccion: string;
  // estadoCivil: string;
  // fechaNacimiento: string;
  // ocupacion: string;

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

  // constructor(personaList: PersonaList) {
  //   {
  //     super(personaList.id);
  //     // this.nombre = personaList.nombre || '';
  //     // this.apellido = personaList.apellido;
  //     // this.tipoDocumento = personaList.tipoDocumento;
  //     // this.numeroDocumento = personaList.numeroDocumento;
  //     // this.genero = personaList.genero;
  //     // this.direccion = personaList.direccion;
  //     // this.estadoCivil = personaList.estadoCivil;
  //     // this.fechaNacimiento = personaList.fechaNacimiento;
  //     // this.ocupacion = personaList.ocupacion;
  //   }
  // }
}
