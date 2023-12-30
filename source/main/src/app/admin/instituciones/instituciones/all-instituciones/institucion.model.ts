export class InstitucionList {
  id: number;
  nombre: string;
  tipo: string;
  descripcion: string;
  date: string;
  constructor(institucionList: InstitucionList) {
    {
      this.id = institucionList.id || this.getRandomID();
      this.nombre = institucionList.nombre || '';
      this.tipo = institucionList.tipo || '';
      this.descripcion = institucionList.descripcion || '';
      this.date = institucionList.date;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}