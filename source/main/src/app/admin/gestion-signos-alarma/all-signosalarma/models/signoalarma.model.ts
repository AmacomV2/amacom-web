import { GenericDTO } from "@shared/models/GenericDTO";

export class SignoAlarmaDTO extends GenericDTO{
  name: string;
  type: string;
  status: string;
  description: string;
  // constructor(signoAlarmaList: SignoAlarmaList) {
  //   {
  //     this.id = signoAlarmaList.id || this.getRandomID();
  //     this.nombre = signoAlarmaList.nombre || '';
  //     this.tipo = signoAlarmaList.tipo || '';
  //     this.descripcion = signoAlarmaList.descripcion || '';
  //     this.estado = signoAlarmaList.estado;
  //     this.date = signoAlarmaList.date;
  //   }
  // }
  // public getRandomID(): number {
  //   const S4 = () => {
  //     return ((1 + Math.random()) * 0x10000) | 0;
  //   };
  //   return S4() + S4();
  // }
}