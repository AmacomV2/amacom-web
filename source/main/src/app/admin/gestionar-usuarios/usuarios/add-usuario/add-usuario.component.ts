import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogService } from '@core/dialog/services/dialog.service';
import { AuthService } from '@core/service/auth.service';
import { AppDataService } from '@shared/services/app-data.service';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { environment } from 'environments/environment';
import { map, startWith, tap } from 'rxjs';
import { UserCrudService } from '../services/user-crud.service';
import { DialogformComponent } from './change-password/dialogform.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss'],
})
export class AddUsuarioComponent implements OnInit {
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

  getRoles = this.appDataService.getRoles().pipe(
    map((data) => {
      return data
        .filter((item) => item.name !== 'SUPER_ADMIN')
        .map((item) => {
          return {
            id: item.id,
            name:
              item.name === 'USER'
                ? 'Usuario'
                : item.name === 'NURSING'
                ? 'Enfermeria'
                : 'Administrador',
          };
        });
    })
  );

  valuePerson: any = null;

  constructor(
    private fb: UntypedFormBuilder,
    public dialog: MatDialog,
    private router: Router,
    private pasoParametrosService: PasoParametrosService,
    private dialogModel: DialogService,
    private appDataService: AppDataService,
    private http: HttpClient,
    private userCrudService: UserCrudService,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.createContactForm();

    if (this.data?.personId) {
      this.getPerson(this.data.personId).subscribe((data) => {
        this.valuePerson = data;
      });
    }
  }

  onSubmit() {
    const observer$ = this.modoEditar
      ? this.userCrudService.updatePerson(this.usuarioForm.value)
      : this.userCrudService.createPerson(this.usuarioForm.value);

    observer$.subscribe((val) => {
      this.cancelar();
    });
  }

  // buscarPersona() {
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(FormDialogUsuarioComponent, {
  //     data: {},
  //     direction: tempDirection,
  //   });
  // }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro('data');
    this.modoEditar = this.pasoParametrosService.obtenerParametro('modoEditar');
    if (this.modoEditar == true) {
      this.titulo = 'Editar usuario';
      this.subtitulo = 'En esta pantalla podrás editar el usuario';
    } else {
      this.titulo = 'Adicionar usuario';
      this.subtitulo = 'En esta pantalla podrás adicionar un usuario';
    }
    return this.fb.group({
      id: [this.data?.id],
      username: [
        this.data?.username,
        [Validators.required, Validators.pattern('[a-zA-Z]+')],
      ],
      idRol: [this.data?.idRol, [Validators.required]],
      personId: [this.data?.personId, [Validators.required]],

      password: [''],
      cpassword: ['', Validators.required],
      email: [
        this.data?.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
    });
  }

  cancelar() {
    this.router.navigate(['/admin/gestionar-usuarios/usuarios/all-usuarios']);
  }

  openDialogChangePassword(): void {
    this.dialogModel
      .show({
        title: 'Cambiar contraseña',
        component: DialogformComponent,
        width: '640px',
        actions: {
          primary: 'Guardar',
          secondary: 'Cancelar',
        },
        // disableClose: true,
      })
      .subscribe((result) => {
        if (result.estado) {
          this.authService
            .changePassword(result.data)
            .pipe(
              tap(() => this.snackbar.open('Contraseña cambiada', 'Cerrar'))
            )
            .subscribe((data) => {
              console.log(data);
              this.dialogModel.close();
            });
        }
      });
  }

  /**
   * SUGGESTION DE PERSONAS
   * @param filter
   * @returns
   */
  searchPerson(filter) {
    return this.http
      .get<any>(environment.apiUrl + '/person/query', {
        params: { page: '0', size: '10', query: '%' + filter + '%' },
      })
      .pipe(
        startWith([this.data?.personId]),
        map((data) => data.content)
      );
  }

  /**
   * busca la persona por id
   * @param id
   * @returns
   */
  getPerson(id) {
    return this.http.get<any>(environment.apiUrl + '/person/get?id=' + id);
  }
}
