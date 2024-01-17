import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from '../../../admin/inventory/item-stock-list/dialog/form-dialog/form-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Direction } from '@angular/cdk/bidi';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { ActivatedRoute, Router } from '@angular/router';
import { BitacoraDTO } from '../models/bitacora.model';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { environment } from 'environments/environment';
import { DeleteBitacoraComponent } from './dialog/delete-bitacora/delete-bitacora.component';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { AuthService } from '@core';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
})
export class BitacoraComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  title = 'BITACORAS';
  subtitle = 'En esta pantalla podrás visualizar las bitacoras';

  config: NgTableConfig<any> = {
    title: 'Lista de bitacoras',
    keys: ['id', 'name', 'description', 'updatedAt'],
    headerColumns: ['No', 'Nombre Completo', 'Detalle', 'última actualización'],
    urlData: environment.apiUrl + '/logBook/consult',
    typeColumns: ['uuid', null, null, 'date'],
    pageableOptions: {
      otherParams: {
        personId: null,
      },
    },
    pageable: true,
    showFilter: true,
  };

  modalForm: ModalConfig<BitacoraDTO> = {
    create: {
      urlView: '/doctor/inventory/issued-items',
      actionType: 'add',
    },
    edit: {
      urlView: '/doctor/inventory/issued-items',
      actionType: 'edit',
    },
    delete: {
      modal: {
        title: '¿Está seguro de eliminar la bitacora?',
        component: DeleteBitacoraComponent,
      },
      actionType: 'delete',
      urlEndpoint: '/logBook',
    },
    view: {
      configView: [
        {
          key: 'name',
          label: 'Nombre',
        },
        {
          key: 'description',
          label: 'Descripción',
        },
        {
          key: 'createdAt',
          label: 'Fecha de creación',
          type: 'date',
        },
      ],
      modal: {
        title: 'Detalle de la bitacora',
        width: '400px',
      },
      actionType: 'view',
    },
  };

  embebedView = true;

  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private pasoParametrosService: PasoParametrosService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
      this.embebedView = data['embebedView'];
    });

    if (!this.embebedView) {
      console.log('embebedView', this.auth.currentUserValue);
      this.config.pageableOptions.otherParams['personId'] =
        this.auth.currentUserValue.person.id;

      this.modalForm.create.urlView = '/patient/inventory/issued-items';
      this.modalForm.edit.urlView = '/patient/inventory/issued-items';
    } else {
      this.config.pageableOptions.otherParams['personId'] =
        this.pasoParametrosService.obtenerParametro('dataPersona')?.id;
    }
  }
  refresh() {
    // this.loadData();
  }
  addNew() {
    this.router.navigate(['/doctor/inventory/issued-items']);
  }
  editCall1(data: any) {
    this.router.navigate(['/doctor/inventory/editar-bitacora']);
  }
  search(data2: any) {
    //this.id = data2.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        itemStockList: data2,
        bandera: true,
      },
      direction: tempDirection,
    });
  }
  editCall(data1: any) {
    //this.id = data1.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        itemStockList: data1,
        bandera: false,
      },
      direction: tempDirection,
    });
  }
  deleteItem(data3: any) {
    //this.id = data3.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(DeleteBitacoraComponent, {
      data: data3,
      direction: tempDirection,
    });
  }
}
