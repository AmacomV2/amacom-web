export class LogroList {
  id: number;
  nombre: string;
  date: string;
  constructor(logroList: LogroList) {
    {
      this.id = logroList.id || this.getRandomID();
      this.nombre = logroList.nombre || '';
      this.date = logroList.date;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}