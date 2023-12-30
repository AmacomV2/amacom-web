export class ServicioList {
  id: number;
  nombre: string;
  descripcion: string;
  date: string;
  constructor(servicioList: ServicioList) {
    {
      this.id = servicioList.id || this.getRandomID();
      this.nombre = servicioList.nombre || '';
      this.descripcion = servicioList.descripcion || '';
      this.date = servicioList.date;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}