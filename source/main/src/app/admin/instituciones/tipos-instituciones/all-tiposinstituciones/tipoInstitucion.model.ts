export class TipoInstitucionList {
  id: number;
  nombre: string;
  descripcion: string;
  date: string;
  constructor(tipoInstitucionList: TipoInstitucionList) {
    {
      this.id = tipoInstitucionList.id || this.getRandomID();
      this.nombre = tipoInstitucionList.nombre || '';
      this.descripcion = tipoInstitucionList.descripcion || '';
      this.date = tipoInstitucionList.date;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}