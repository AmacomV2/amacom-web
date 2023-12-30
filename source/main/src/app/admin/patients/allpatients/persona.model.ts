export class PersonaList {
  id: number;
  nombre: string;
  apellido: string;
  tipoDocumento: string;
  numeroDocumento: number;
  genero: string;
  direccion: string;
  estadoCivil: string;
  fechaNacimiento: string;
  ocupacion: string;
  constructor(personaList: PersonaList) {
    {
      this.id = personaList.id || this.getRandomID();
      this.nombre = personaList.nombre || '';
      this.apellido = personaList.apellido;
      this.tipoDocumento = personaList.tipoDocumento;
      this.numeroDocumento = personaList.numeroDocumento;
      this.genero = personaList.genero;
      this.direccion = personaList.direccion;
      this.estadoCivil = personaList.estadoCivil;
      this.fechaNacimiento = personaList.fechaNacimiento;
      this.ocupacion = personaList.ocupacion;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}