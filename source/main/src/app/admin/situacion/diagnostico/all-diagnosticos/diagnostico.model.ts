export class DiagnosticoList {
  id: number;
  resultado: string;
  alerta: string;
  estado: string;
  date: string;
  constructor(diagnosticoList: DiagnosticoList) {
    {
      this.id = diagnosticoList.id || this.getRandomID();
      this.resultado = diagnosticoList.resultado || '';
      this.alerta = diagnosticoList.alerta || '';
      this.estado = diagnosticoList.estado || '';
      this.date = diagnosticoList.date;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}