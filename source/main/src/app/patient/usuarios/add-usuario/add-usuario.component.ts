import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Direction } from '@angular/cdk/bidi';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { DialogformComponent } from './dialogform/dialogform.component';
import { FormDialogUsuarioComponent } from '../allusuarios/dialog/form-dialog/form-dialog.component';
@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss'],
})
export class AddUsuarioComponent {
  public data: any;
  public modoEditar: boolean = false;
  public titulo: any;
  public title: any;
  public subtitulo: any;
  usuarioForm: UntypedFormGroup;
  hide3 = true;
  agree3 = false;
  hide = true;
  chide = true;
  constructor(private fb: UntypedFormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private pasoParametrosService: PasoParametrosService,
    private dialogModel: MatDialog) {
    this.usuarioForm = this.createContactForm();
    
    this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      designation: [''],
      department: [''],
      address: [''],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      dob: ['', [Validators.required]],
      education: [''],
      uploadFile: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.usuarioForm.value);
  }
  buscarPersona(){
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogUsuarioComponent, {
      data: {
      },
      direction: tempDirection,
    });
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro("data");
    console.log("DATAA", this.data);
    this.modoEditar = this.pasoParametrosService.obtenerParametro("modoEditar");
    if(this.modoEditar==true){
      this.titulo = "Editar usuario";
      this.subtitulo = "En esta pantalla podrás editar el usuario";
      return this.fb.group({
        id: [this.data.id, [Validators.required]],
        nombreUsuario: [this.data.nombreUsuario, [Validators.required]],
        rol: [this.data.rol, [Validators.required]],
        persona: [this.data.idPersona, [Validators.required]],
        date: [this.data.date, [Validators.required]],
        email: [
          this.data.correo,
          [Validators.required, Validators.email, Validators.minLength(5)],
        ],
        password: ['', Validators.required],
       cpassword: ['', Validators.required],
      });
    } else {
      this.titulo = "Adicionar usuario";
      this.subtitulo = "En esta pantalla podrás adicionar un usuario";
      return this.fb.group({
      id: ['', [Validators.required]],
      nombreUsuario: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      rol: [''],
      persona: ['', [Validators.required]],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      });
    }
  }

  cancelar() {
    this.router.navigate(['/patient/usuarios/all-usuarios']);
  }

  openDialog(): void {
    this.dialogModel.open(DialogformComponent, {
      width: '640px',
      disableClose: true,
    });
  }
}