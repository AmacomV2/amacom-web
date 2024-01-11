export class SituacionList {
  id: number;
  tema: string;
  date: string;
  descripcion: string;
  gradoAfectacion: number;
  sentimiento: string;
  firstPen: string;
  comportamiento: string;
  constructor(situacionList: SituacionList) {
    {
      this.id = situacionList.id || this.getRandomID();
      this.tema = situacionList.tema || '';
      this.date = situacionList.date;
      this.descripcion = situacionList.descripcion;
      this.gradoAfectacion = situacionList.gradoAfectacion;
      this.sentimiento = situacionList.sentimiento;
      this.firstPen = situacionList.firstPen;
      this.comportamiento = situacionList.comportamiento;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}