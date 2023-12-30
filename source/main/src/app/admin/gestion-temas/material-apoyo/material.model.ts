export class MaterialList {
  id: number;
  nombre: string;
  descripcion: string;
  url: string;
  date: string;
  constructor(materialList: MaterialList) {
    {
      this.id = materialList.id || this.getRandomID();
      this.nombre = materialList.nombre || '';
      this.descripcion = materialList.descripcion;
      this.url = materialList.url;
      this.date = materialList.date;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}