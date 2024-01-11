import { Direction } from '@angular/cdk/bidi';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { Room } from 'app/admin/situacion/models/room.model';
import { DeleteDialogUsuarioComponent } from './dialog/delete/delete.component';
import { SearchDialogUsuarioComponent } from './dialog/search/search.component';
import { UsuarioList } from './usuario.model';
@Component({
  selector: 'app-allusuarios',
  templateUrl: './allusuarios.component.html',
  styleUrls: ['./allusuarios.component.scss'],
})
export class AllUsuariosComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  public listaUsuarios: Array<any> = [];
  public indicePrimerItem: number = 1;
  public indiceUltimoItem: number = 10;
  displayedColumns = [
    'select',
    'img',
    'name',
    'designation',
    'mobile',
    'email',
    'date',
    'address',
    'actions',
  ];
  index!: number;
  id!: number;
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private pasoParametrosService: PasoParametrosService
  ) {
    super();
  }
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild('filter', { static: true })
  filter!: ElementRef;
  ngOnInit() {
    this.llenarLista();
  }
  refresh() {
    // this.loadData();
  }
  search(row: Room) {
    this.id = row.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(SearchDialogUsuarioComponent, {
      data: row,
      direction: tempDirection,
    });
  }
  addNew() {
    this.router.navigate(['/patient/usuarios/add-usuario']);
  }
  editCall(row: UsuarioList) {
    this.id = row.id;
    this.pasoParametrosService.adicionarParametro('data', row);
    this.pasoParametrosService.adicionarParametro('modoEditar', true);
    this.router.navigate(['/patient/usuarios/add-usuario']);
  }
  deleteItem(row: UsuarioList) {
    this.id = row.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(DeleteDialogUsuarioComponent, {
      data: row,
      direction: tempDirection,
    });
  }
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  llenarLista() {
    this.listaUsuarios = [
      {
        id: 1,
        nombreUsuario: 'VEEB',
        date: '27/06/2001',
        correo: 'nenitq@gmail.com',
        rol: 'ADMIN',
        estado: 'Activo',
      },
      {
        id: 2,
        nombreUsuario: 'Lori',
        date: '27/06/2001',
        correo: 'luigi@gmail.com',
        rol: 'NO-ADMIN',
        estado: 'Inactivo',
      },
    ];
  }
}
