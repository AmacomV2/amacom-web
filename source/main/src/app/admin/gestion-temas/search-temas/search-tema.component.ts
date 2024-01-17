import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { TemaDTO } from '../all-temas/models/tema.model';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
@Component({
  selector: 'app-search-tema',
  templateUrl: './search-tema.component.html',
  styleUrls: ['./search-tema.component.scss'],
})
export class SearchTemaComponent 
implements OnInit{
  public data: TemaDTO;
  public modoEditar: boolean = false;
  public titulo: any;
  public subtitulo: any;
  roomForm: UntypedFormGroup;
  public listaSigAlarMadre: Array<any> = [];
  public listaSubtemas: Array<any> = [];
  public listaSigAlarBebe: Array<any> = [];
  public indicePrimerItem: number = 1;
  public indiceUltimoItem: number = 10;
  toppings = new UntypedFormControl();
  toppingList: string[] = [
    'Feliz',
    'Tristeza',
    'Enojo',
    'Decepción',
    'Extasis',
    'Neutral',
  ];
  panelOpenState = false;
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

  configSubtema: NgTableConfig<any> = {
    title: 'Lista de subtemas',
    keys: ['id', 'name', 'validityIndicator', 'parentId', 'createdAt'],
    headerColumns: ['No', 'Nombre', 'Validez', 'Tema Padre', 'Fecha Creación'],
    urlData: '/subject/getByIdList',
    typeColumns: ['uuid', null, null, null, null],
    pageable: true,
    showFilter: true,
    hideDefaultActions: {
      add: true,
      view: true,
      edit: true,
      delete: true,
    },
    pageableOptions:{}
  };

  constructor(private fb: UntypedFormBuilder,
    private router: Router,
    private pasoParametrosService: PasoParametrosService) {
    this.roomForm = this.createContactForm();
  }
  ngOnInit() {
     //this.llenarLista();
     this.configSubtema.pageableOptions.otherParams = {subjectIdList: this.data.id};
   }
  onSubmit() {
    console.log('Form Value', this.roomForm.value);
  }

  llenarLista(){
    this.listaSigAlarMadre = [
     {id:1, descripcion:"Primer signo de alarma"},
     {id:2, descripcion:"Segundo signo de alarma"},
     {id:3, descripcion:"Tercer signo de alarma"},
     {id:4, descripcion:"Cuarto signo de alarma"},
     {id:5, descripcion:"Quinto signo de alarma"},
     {id:6, descripcion:"Sexto signo de alarma"},
     {id:7, descripcion:"Septimo signo de alarma"},
     {id:8, descripcion:"Octavo signo de alarma"},
    ];
    this.listaSubtemas = [
      {id:1, nombre:"Tema 4", validez:"1", temaPadre:"Tema 1", date:"11/11/2011"},
      {id:2, nombre:"Tema 5", validez:"2", temaPadre:"Tema 1", date:"11/11/2011"},
      {id:3, nombre:"Tema 6", validez:"3", temaPadre:"Tema 1", date:"11/11/2011"},
     ];
  }

  cancel() {
    this.router.navigate(['/admin/gestion-temas/all-temas']);
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro("tema");
    console.log("DATAA", this.data);
    this.titulo = this.data?.name.toUpperCase();
      return this.fb.group({
        id: [this.data.id, [Validators.required]],
        name: [this.data.name, [Validators.required]],
        validez: [this.data.validityIndicator, [Validators.required]],
        parentId: [this.data.parentId, [Validators.required]],
        createdAt: [this.data.createdAt, [Validators.required]],
      });
  } 

  editCall(row: TemaDTO){
    this.pasoParametrosService.adicionarParametro('data', row);
    this.pasoParametrosService.adicionarParametro('modoEditar', true);
    this.router.navigate(['/admin/gestion-temas/add-temas']);
  }

  volver(){
    this.router.navigate(['/admin/gestion-temas/all-temas']);
  }
}
