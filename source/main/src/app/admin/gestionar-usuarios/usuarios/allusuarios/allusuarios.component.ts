import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { ActivatedRoute, Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { FilterTableCRUD } from '@shared/components/crud-container/models/filter.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { environment } from 'environments/environment';
import { UsuarioDTO } from '../models/usuario.model';
import { DeleteDialogUsuarioComponent } from './dialog/delete/delete.component';
import { Role } from '@core';
@Component({
  selector: 'app-allusuarios',
  templateUrl: './allusuarios.component.html',
  styleUrls: ['./allusuarios.component.scss'],
})
export class AllUsuariosComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  title = 'Lista de usuarios';
  subtitle = 'En esta pantalla podrás visualizar los usuarios';

  config: NgTableConfig<UsuarioDTO> = {
    title: 'Lista de usuarios',
    headerColumns: [
      'No',
      'Nombre de usuario',
      'Rol',
      'Correo electrónico',
      'última actualización',
    ],
    keys: ['id', 'username', 'enumRol', 'email', 'updatedAt'],
    urlData: environment.apiUrl + '/users/consulta',
    mapperColums: [
      null,
      null,
      (enumRol) => {
        console.log();
        if (enumRol === 'ROLE_ADMIN') return 'Administrador';
        else if (enumRol === 'ROLE_NURSING') return 'Doctor';
        else return 'Usuario';
      },
    ],
    typeColumns: ['uuid', null, null, null, 'date'],
    pageable: true,
    showFilter: true,
  };

  modalForm: ModalConfig<UsuarioDTO> = {
    create: {
      urlView: '/admin/gestionar-usuarios/usuarios/add-usuario',
      actionType: 'add',
    },
    edit: {
      urlView: '/admin/gestionar-usuarios/usuarios/add-usuario',
      actionType: 'edit',
    },
    delete: {
      modal: {
        title: 'Eliminar usuario',
        component: DeleteDialogUsuarioComponent,
      },
      actionType: 'delete',
      urlEndpoint: '/users',
    },
    view: {
      modal: {
        title: 'Ver usuario',
        width: '400px',
        maxHeight: '500px',
      },
      actionType: 'view',
      configView: [
        {
          label: 'Nombre de usuario',
          key: 'username',
        },
        {
          label: 'Rol',
          key: 'enumRol',
        },
        {
          label: 'Correo electrónico',
          key: 'email',
        },
        {
          label: 'Fecha de creación',
          key: 'createdAt',
          type: 'date',
        },
        {
          label: 'Fecha de actualización',
          key: 'updatedAt',
          type: 'date',
        },
      ],
    },
  };

  filterTable: FilterTableCRUD[] = [
    {
      label: 'Nombre',
      placeholder: 'Ingrese el nombre',
      key: 'name',
    },
  ];

  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private pasoParametrosService: PasoParametrosService,
    private route:ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
    });

    this.llenarLista();
  }
  // refresh() {
  //  // this.loadData();
  // }
  // search(row: Room) {
  //   this.id = row.id;
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(SearchDialogUsuarioComponent, {
  //     data: row,
  //     direction: tempDirection,
  //   });
  // }
  // addNew() {
  //   this.router.navigate(['/admin/gestionar-usuarios/usuarios/add-usuario']);
  // }
  // editCall(row: UsuarioList) {
  //   this.id = row.id;
  //   this.pasoParametrosService.adicionarParametro('data', row);
  //   this.pasoParametrosService.adicionarParametro('modoEditar', true);
  //   this.router.navigate(['/admin/gestionar-usuarios/usuarios/add-usuario']);
  // }
  // deleteItem(row: UsuarioList) {
  //   this.id = row.id;
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(DeleteDialogUsuarioComponent, {
  //     data: row,
  //     direction: tempDirection,
  //   });
  // }
  // private refreshTable() {
  //   this.paginator._changePageSize(this.paginator.pageSize);
  // }

  // showNotification(
  //   colorName: string,
  //   text: string,
  //   placementFrom: MatSnackBarVerticalPosition,
  //   placementAlign: MatSnackBarHorizontalPosition
  // ) {
  //   this.snackBar.open(text, '', {
  //     duration: 2000,
  //     verticalPosition: placementFrom,
  //     horizontalPosition: placementAlign,
  //     panelClass: colorName,
  //   });
  // }

  llenarLista() {
    // this.listaUsuarios = [
    //  {id:1, nombreUsuario:"VEEB", date:"27/08/2023", correo:"vescobar@gmail.com", rol: "ADMIN", estado: "Inactivo"},
    //  {id:2, nombreUsuario:"Violet", date:"27/08/2023", correo:"admin@hotmail.com", rol: "ADMIN", estado: "Activo"},
    //  {id:3, nombreUsuario:"Lori", date:"22/09/2023", correo:"mariozxdflo@gmail.com", rol: "ADMIN", estado: "Activo"},
    // ];
  }
}
