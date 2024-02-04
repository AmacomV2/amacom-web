import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { environment } from 'environments/environment';
import { map } from 'rxjs';
import { InstitucionDTO } from '../models/institucion.model';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { InstitucionesService } from '../../services/instituciones.service';
import { NgTableComponent } from '@shared/components/ng-table/ng-table.component';
@Component({
  selector: 'app-add-institucion',
  templateUrl: './add-institucion.component.html',
  styleUrls: ['./add-institucion.component.scss'],
})
export class AddInstitucionComponent implements OnInit {
  public data: InstitucionDTO;
  public modoEditar: boolean = false;
  public titulo: any;
  public subtitulo: any;
  institucionForm: UntypedFormGroup;
  public listaSigAlarMadre: Array<any> = [];
  public listaInstitucion: Array<any> = [];
  public listaServicio: Array<any> = [];
  public indicePrimerItem: number = 1;
  public indiceUltimoItem: number = 10;
  checked = false;

  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }

  isCreated = false;

  configTableServicio: NgTableConfig<any> = {
    title: 'Lista de servicios',
    keys: ['id', 'name'],
    headerColumns: ['No', 'Nombre'],
    urlData: environment.apiUrl + '/institutionService/consulta',
    typeColumns: ['uuid', null, null],
    pageable: true,
    showFilter: false,
    hideDefaultActions: {
      add: true,
      view: true,
      edit: true,
      delete: true,
    },
    pageableOptions: {
      otherParams: {
        idInstitution: null,
      },
    },
  };

  configTablePersona: NgTableConfig<any> = {
    title: 'Lista de personas',
    keys: ['id', 'name', 'description'],
    headerColumns: ['No', 'Nombre', 'Descripción'],
    urlData: environment.apiUrl + '/institutionServicePerson/consulta',
    typeColumns: ['uuid', null, null],
    pageable: true,
    showFilter: false,
    hideDefaultActions: {
      add: true,
      view: true,
      edit: true,
      delete: false,
    },
  };

  valueInstitucion: any;

  serviceForm: UntypedFormGroup;

  @ViewChild('tableService') tableService: NgTableComponent<any>;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private pasoParametrosService: PasoParametrosService,
    private http: HttpClient,
    private institucionService: InstitucionesService
  ) {}

  ngOnInit() {
    this.institucionForm = this.createContactForm();
    this.serviceForm = this.fb.group({
      id: [null],
      idInstitution: [this.data?.id],
      idServices: [null, [Validators.required]],
      name: [''],
      description: [''],
      effectivenessStart: [new Date()],
      effectivenessEND: [''],
    });
    this.getTipoInstitucion(this.institucionForm.value.institutionTypeId);

    this.configTableServicio.pageableOptions.otherParams = {
      institutionId: this.data?.id,
    };
  }

  /**
   * guarda la institucion
   */
  onSubmit() {
    const observer$ = this.modoEditar
      ? this.institucionService.update(this.institucionForm.value)
      : this.institucionService.save(this.institucionForm.value);

    observer$.subscribe((res) => {
      this.isCreated = true;
      this.configTableServicio.pageableOptions.otherParams = {
        institutionId: res.id,
      };
      this.configTablePersona.pageableOptions.otherParams = {
        institutionId: res.id,
      };
      this.data = res;
      this.serviceForm.controls['idInstitution'].setValue(res.id);
    });
  }

  guardarService() {
    this.institucionService
      .guardarServiceInstituto(this.serviceForm.value)
      .subscribe((res) => {
        this.tableService.findData();
      });
  }

  volver() {
    this.router.navigate([
      '/admin/instituciones/instituciones/all-instituciones',
    ]);
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro('data');
    this.modoEditar = this.pasoParametrosService.obtenerParametro('modoEditar');
    if (this.modoEditar == true) {
      this.titulo = 'Editar institución';
      this.subtitulo = 'En esta pantalla podrás editar la institución';
      this.isCreated = true;
    } else {
      this.titulo = 'Adicionar institución';
      this.subtitulo = 'En esta pantalla podrás adicionar una institución';
    }
    return this.fb.group({
      id: [this.data?.id],
      name: [this.data?.name, [Validators.required]],
      description: [this.data?.description, [Validators.required]],
      institutionTypeId: [this.data?.institutionTypeId, [Validators.required]],
      createdAt: [this.data?.createdAt],
    });
  }

  listaTipoInstitucion(filtro) {
    const params = {
      page: 0,
      size: 10,
      query: filtro,
    };
    return this.http
      .get<any[]>(environment.apiUrl + '/typeInstitution/consulta', {
        params: params,
      })
      .pipe(
        map((data: any) => {
          return data?.content ?? [];
        })
      );
  }

  getTipoInstitucion(id) {
    if (!id) {
      return;
    }
    this.http
      .get<any[]>(environment.apiUrl + '/typeInstitution/' + id)
      .subscribe((data: any) => {
        this.valueInstitucion = data;
      });
  }

  listaServicios(filtro) {
    return this.http
      .get<any[]>(environment.apiUrl + '/services/consulta', {
        params: {
          page: 0,
          size: 10,
          query: filtro,
        },
      })
      .pipe(
        map((data: any) => {
          return data?.content ?? [];
        })
      );
  }
}
