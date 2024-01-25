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
import { environment } from 'environments/environment';
@Component({
  selector: 'app-search-tema',
  templateUrl: './search-tema.component.html',
  styleUrls: ['./search-tema.component.scss'],
})
export class SearchTemaComponent implements OnInit {
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
    urlData: environment.apiUrl + '/subject/search',
    typeColumns: ['uuid', null, null, null, null],
    pageable: true,
    showFilter: true,
    hideDefaultActions: {
      add: true,
      view: true,
      edit: true,
      delete: true,
    },
    pageableOptions: {
      otherParams: {
        parentId: null,
      },
    },
  };

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private pasoParametrosService: PasoParametrosService
  ) {
    this.roomForm = this.createContactForm();
  }
  ngOnInit() {
    //this.llenarLista();
    this.configSubtema.pageableOptions.otherParams = {
      parentId: this.data.id,
    };
  }
  onSubmit() {
    console.log('Form Value', this.roomForm.value);
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro('tema');
    if(!this.data){
      this.volver();
    }
    this.titulo = this.data?.name.toUpperCase();
    return this.fb.group({
      id: [this.data.id, [Validators.required]],
      name: [this.data.name, [Validators.required]],
      validez: [this.data.validityIndicator, [Validators.required]],
      parentId: [this.data.parentId, [Validators.required]],
      createdAt: [this.data.createdAt, [Validators.required]],
    });
  }

  editCall(row: TemaDTO) {
    this.pasoParametrosService.adicionarParametro('data', row);
    this.pasoParametrosService.adicionarParametro('modoEditar', true);
    this.router.navigate(['/admin/gestion-temas/add-temas']);
  }

  volver() {
    this.router.navigate(['/admin/gestion-temas/all-temas']);
  }
}
