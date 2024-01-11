import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppDataService } from '@shared/services/app-data.service';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { environment } from 'environments/environment';
import { map } from 'rxjs';
import { InstitucionDTO } from '../models/institucion.model';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { InstitucionesService } from '../../services/instituciones.service';
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
    keys: ['id', 'name', 'description'],
    headerColumns: ['No', 'Nombre', 'Descripción'],
    urlData: environment.apiUrl + '/services/consulta',
    typeColumns: ['uuid', null, null],
    pageable: true,
    showFilter: false,
    hideDefaultActions: {
      add: true,
      view: true,
      edit: true,
      delete: true,
    },
    checkbox: true,
  };

  valueInstitucion: any;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private pasoParametrosService: PasoParametrosService,
    private http: HttpClient,
    private institucionService: InstitucionesService
  ) {}

  ngOnInit() {
    this.institucionForm = this.createContactForm();
    this.getTipoInstitucion(this.institucionForm.value.institutionTypeId);
    this.llenarLista();
  }

  onSubmit() {
    const observer$ = this.modoEditar
      ? this.institucionService.update(this.institucionForm.value)
      : this.institucionService.save(this.institucionForm.value);

    observer$.subscribe((res) => {
      this.isCreated = true;
      //this.cancel();
    });
    console.log('Form Value', this.institucionForm.value);
  }

  guardarService() {
    
  }

  llenarLista() {
    this.listaSigAlarMadre = [{ id: 1, descripcion: 'Hernan Huertas' }];
    this.listaInstitucion = [
      {
        id: 1,
        nombre: 'Institucion 1',
        tipo: 'tipo 1',
        descripcion: 'Soy la Institucion 1',
        date: '11/11/2011',
      },
      {
        id: 2,
        nombre: 'Institucion 2',
        tipo: 'tipo 2',
        descripcion: 'Soy la Institucion 2',
        date: '11/11/2011',
      },
      {
        id: 3,
        nombre: 'Institucion 3',
        tipo: 'tipo 3',
        descripcion: 'Soy la Institucion 3',
        date: '11/11/2011',
      },
    ];
    this.listaServicio = [
      { id: 1, nombre: 'servicio 1', descripcion: 'Soy el servicio 1' },
      { id: 2, nombre: 'servicio 2', descripcion: 'Soy el servicio 2' },
      { id: 3, nombre: 'servicio 3', descripcion: 'Soy el servicio 3' },
    ];
  }

  cancel() {
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

  checkedService(rows: any[]) {
    console.log(rows);
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
}
