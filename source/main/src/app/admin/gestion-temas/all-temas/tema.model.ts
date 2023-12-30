export class TemaList {
  id: number;
  nombre: string;
  validez: string;
  temaPadre: string;
  date: string;
  constructor(temaList: TemaList) {
    {
      this.id = temaList.id || this.getRandomID();
      this.nombre = temaList.nombre || '';
      this.validez = temaList.validez || '';
      this.temaPadre = temaList.temaPadre || '';
      this.date = temaList.date;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}