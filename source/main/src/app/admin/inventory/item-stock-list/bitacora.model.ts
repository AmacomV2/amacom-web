import { formatDate } from '@angular/common';
export class BitacoraList {
  id: number;
  i_name: string;
  date: string;
  descripcion: string;
  constructor(bitacoraList: BitacoraList) {
    {
      this.id = bitacoraList.id || this.getRandomID();
      this.i_name = bitacoraList.i_name || '';
      this.date = bitacoraList.date;
      this.descripcion = bitacoraList.descripcion;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}