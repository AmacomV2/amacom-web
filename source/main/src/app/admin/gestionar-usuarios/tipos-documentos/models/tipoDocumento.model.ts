import { v4 as uuidv4 } from 'uuid';

export class TipoDocumentoDTO {
  id: string;
  name: string;
  acronym: string;
  createdAt: string;
  updatedAt: string;
  constructor(tipoDocumentoList: TipoDocumentoDTO) {
    {
      this.id = tipoDocumentoList.id || uuidv4();
      this.name = tipoDocumentoList.name || '';
      this.acronym = tipoDocumentoList.acronym || '';
      this.updatedAt = tipoDocumentoList.updatedAt || new Date().toISOString();
    }
  }
}