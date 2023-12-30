export class UsuarioList {
  id: number;
  nombreUsuario: string;
  correo: string;
  rol: string;
  idPersona: number;
  date: string;
  estado: string;
  constructor(usuarioList: UsuarioList) {
    {
      this.id = usuarioList.id || this.getRandomID();
      this.nombreUsuario = usuarioList.nombreUsuario || '';
      this.date = usuarioList.date;
      this.correo = usuarioList.correo;
      this.rol = usuarioList.rol;
      this.idPersona = usuarioList.idPersona;
      this.estado = usuarioList.estado;
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}