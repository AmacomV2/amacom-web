import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { MaterialDTO } from '../../../models/material.model';
import { ModalCRUDPayload } from '@shared/components/crud-container/models/modal.payload';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { map, tap } from 'rxjs';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgTableComponent } from '@shared/components/ng-table/ng-table.component';
import { AddMaterialFileComponent } from '../add-material-file/add-material-file.component';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';

@Component({
  selector: 'app-add-material:not(i)',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.scss'],
})
export class AddMaterialComponent implements OnInit {
  dialogTitle: string;
  form: UntypedFormGroup;
  material: MaterialDTO;

  isCreate = false;

  data: MaterialDTO;

  title = 'Crear Material de apoyo';

  controlTema: UntypedFormControl = new UntypedFormControl(null);

  configtemas: NgTableConfig<any> = {
    title: 'Lista temas',
    keys: ['id', 'subjectName'], //, 'subjectDescription'],
    headerColumns: ['No', 'Nombre del tema'],
    urlData: environment.apiUrl + '/supportMaterialHasSubject/search',
    typeColumns: ['uuid', null, null, null],
    pageableOptions: {
      otherParams: {
        idSupportMaterial: null,
      },
    },
    hideDefaultActions: {
      add: true,
      edit: true,
      view: true,
    },
    pageable: true,
    showFilter: true,
  };

  configFiles: NgTableConfig<any> = {
    title: 'Lista temas',
    keys: ['id', 'name', 'description', 'path'], //, 'subjectDescription'],
    headerColumns: ['No', 'Nombre', 'Descripcion', 'url'],
    urlData: environment.apiUrl + '/supportMaterialFiles/consulta',
    typeColumns: ['uuid', null, null, null],
    pageableOptions: {
      otherParams: {
        idSupportMaterial: null,
      },
    },
    hideDefaultActions: {
      view: true,
    },
    pageable: true,
    showFilter: true,
  };

  modalFiles: ModalConfig<MaterialDTO> = {
    edit: {
      modal: {
        title: 'Editar archivo a material de apoyo',
        component: AddMaterialFileComponent,
      },
      urlEndpoint: '/supportMaterialFiles',
      actionType: 'edit',
    },
    create: {
      modal: {
        title: 'Agregar archivo a material de apoyo',
        component: AddMaterialFileComponent,
      },
      actionType: 'add',
      urlEndpoint: '/supportMaterialFiles/create',
    },
    delete: {
      // modal: {
      //   title: '¿Está seguro de eliminar el material apoyo?',
      //   component: DeleteMaterialComponent,
      // },
      actionType: 'delete',
      urlEndpoint: '/supportMaterialFiles',
      configView: [
        {
          label: 'Nombre',
          key: 'name',
        },
        {
          label: 'Descripcion',
          key: 'description',
        },
        {
          label: 'Url',
          key: 'path',
        },
      ],
    },
    view: {
      actionType: 'view',
      configView: [
        {
          label: 'Nombre',
          key: 'name',
        },
        {
          label: 'Descripcion',
          key: 'description',
        },
        {
          label: 'Url',
          key: 'path',
        },
      ],
    },
  };

  @ViewChild('tableTema') tableTema: NgTableComponent<any>;

  @ViewChild('tableFiles') tableFiles: NgTableComponent<any>;

  constructor(
    private fb: UntypedFormBuilder,
    private pasoParametrosService: PasoParametrosService,
    private http: HttpClient,
    private location: Location,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.data = this.pasoParametrosService.obtenerParametro('data');
    this.isCreate = this.pasoParametrosService.obtenerParametro('modoEditar');

    this.material = this.data;
    //settings for the table of temas
    this.configtemas.pageableOptions.otherParams['idSupportMaterial'] =
      this.material?.id;
    this.configFiles.pageableOptions.otherParams['idSupportMaterial'] =
      this.material?.id;
    this.form = this.createContactForm();
  }

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.material?.id],
      name: [this.material?.name, Validators.required],
      description: [this.material?.description, Validators.required],
      path: [this.material?.path, Validators.required],
    });
  }

  volver() {
    this.location.back();
  }

  submit() {
    this.http
      .post<MaterialDTO>(
        environment.apiUrl + '/supportMaterial/create',
        this.form.value
      )
      .pipe(
        tap(() => {
          this.snackBar.open('Material creado exitosamente.');
        })
      )
      .subscribe((d) => {
        console.log('material creado', d);
        this.data = d;
        this.form.controls['id'].setValue(d.id);
        this.isCreate = true;
        this.pasoParametrosService.adicionarParametro('data', d);
        this.configtemas.pageableOptions.otherParams['idSupportMaterial'] =
          d.id;
        this.tableTema.findData();
      });
  }

  agregarTema() {
    this.http
      .post<any>(environment.apiUrl + '/supportMaterialHasSubject/create', {
        idSupportMaterial: this.data.id,
        subjectId: this.controlTema.value,
      })
      .pipe(
        tap(() => {
          this.snackBar.open('Tema agredado al material exitosamente.');
        })
      )
      .subscribe((data) => {
        this.controlTema.setValue(null);
        console.log('tema agregado', data);
        this.tableTema.findData();
      });
  }

  deleteTema($event) {
    this.http
      .delete<any>(
        environment.apiUrl + '/supportMaterialHasSubject/' + $event.id
      )
      .pipe(
        tap(() => {
          this.snackBar.open('Tema eliminado del material exitosamente.');
        })
      )
      .subscribe((data) => {
        this.tableTema.findData();
      });
  }

  // agregarFile() {
  //   this.http
  //     .post<any>(
  //       environment.apiUrl + '/supportMaterialFiles/create',
  //       this.formFile.value
  //     )
  //     .pipe(
  //       tap(() => {
  //         this.snackBar.open('archivo agredado al material exitosamente.');
  //       })
  //     )
  //     .subscribe((data) => {
  //       this.tableFiles.findData();
  //     });
  // }

  listTemas(filtro: string) {
    return this.http
      .get<any>(`${environment.apiUrl}/subject/search`, {
        params: { page: 0, size: 100, query: filtro },
      })
      .pipe(map((response) => response.content));
  }
}
