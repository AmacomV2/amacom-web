import { Direction } from '@angular/cdk/bidi';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgTableConfig } from '../ng-table/models/table.config.model';
import { ActionCrud, ModalConfig } from './models/action.crud';
import { DialogService } from '@core/dialog/services/dialog.service';
import { DialogIcon } from '@core/dialog/models/icon.dialog';
import { ModalResponse } from '@core/dialog/models/respuesta';
import { CrudContainerService } from './services/crudContainer.service';
import { NgTableComponent } from '../ng-table/ng-table.component';
import { EventsCrudContainer } from './models/events.crud';
import { ModalViewComponent } from '../modal-view/modal-view.component';

@Component({
  selector: 'app-crud-container',
  templateUrl: './crud-container.component.html',
  styleUrls: ['./crud-container.component.scss'],
})
export class CrudContainerComponent implements OnInit {
  /**
   * titulo del contenido.
   */
  @Input() title: string;

  /**
   * subtitulo del contenedor.
   */
  @Input() subtitle: string;

  /**
   * icono del dialogo.
   */
  @Input() dialogIcon: DialogIcon;

  /**
   * muestra el boton de crear. al lado de los criterios de consulta.
   */
  @Input() showCreateButton = true;

  @Input() filterform: {
    label: string;
    placeholder: string;
    icon: string;
    key: string;
  }[];

  @Input() configTable: NgTableConfig<any>;

  @Input() modalForm: ModalConfig<any>;

  @Input() events: EventsCrudContainer;

  @ViewChild('table', { static: true }) table: NgTableComponent<any>;

  constructor(
    // public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private dialogService: DialogService,
    private crudService: CrudContainerService
  ) {}

  ngOnInit() {
    console.log('INIT CRUD CONTAINER');
  }

  addNew() {
    this.showModal(this.modalForm.create, null);
  }

  edit(row: any) {
    this.showModal(this.modalForm.edit, row);
  }

  view(row: any) {
    //this.id = row.id;
    // this.pasoParametrosService.adicionarParametro('data', row);
    // this.router.navigate(['/admin/gestionar-usuarios/usuarios/view-usuario']);
    this.dialogService
      .show({
        component: ModalViewComponent,
        ...this.modalForm.view.modal,
        dataComponent: {
          data: row,
          config: this.modalForm.view.configView,
        },
        hideDefaultActions: true,
      })
      .subscribe((data: ModalResponse) => {
        console.log(data);
      });
  }

  deleteItem(row: any) {
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    this.showModal(this.modalForm.delete, row);
  }

  showModal(action: ActionCrud<any>, row: any) {
    this.dialogService
      .show({
        ...action.modal,
        dataComponent: {
          action: action.actionType,
          row: row,
        },
        // title: action.title,
        // component: action.component,
        // width: '500px',
        // maxHeight: '500px',
        // icon: this.dialogIcon,
      })
      .subscribe((accion: ModalResponse) => {
        if (accion.estado) {
          let observer;
          switch (action.actionType) {
            case 'add':
              observer = this.crudService.postData(
                action.urlEndpoint,
                accion.data
              );
              break;
            case 'delete':
              observer = this.crudService.deleteData(
                action.urlEndpoint,
                row.id
              );
              break;
            case 'edit':
              observer = this.crudService.putData(
                action.urlEndpoint,
                accion.data
              );
              break;
          }

          observer.subscribe((data) => {
            console.log('sucess post', data);
            this.table.findData();
          });
        }
      });
  }
}
