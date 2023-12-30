export class TipoDocumentoList {
  id: number;
  tipo: string;
  codigo: string;
  date: string;
  constructor(tipoDocumentoList: TipoDocumentoList) {
    {
      this.id = tipoDocumentoList.id || this.getRandomID();
      this.tipo = tipoDocumentoList.tipo || '';
      this.codigo = tipoDocumentoList.codigo || '';
      this.date = tipoDocumentoList.date;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}