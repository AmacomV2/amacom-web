import { GenericDTO } from '@shared/models/GenericDTO';

export class UsuarioDTO extends GenericDTO {
  personId: string;
  idRol: string;
  username: string;
  email: string;
  password: string;
  enumRol: string;
}
