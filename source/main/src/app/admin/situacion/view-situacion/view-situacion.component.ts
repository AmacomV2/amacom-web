import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { PasoParametrosService } from '../../paso-parametro.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-situacion',
  templateUrl: './view-situacion.component.html',
  styleUrls: ['./view-situacion.component.scss'],
})
export class ViewSituacionComponent 
implements OnInit{
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
  public listaSigAlarMadre: Array<any> = [];
  public listaSigAlarBebe: Array<any> = [];
  public indicePrimerItem: number = 1;
  public indiceUltimoItem: number = 10;
  public data: any;
  roomForm: UntypedFormGroup;
  formdata = {
    rNo: '105',
    rType: '2',
    pName: 'John Deo',
    aDate: '2020-02-17T14:22:18Z',
    dDate: '2020-02-19T14:22:18Z',
  };
  alerta = new UntypedFormControl();
  alertaList: string[] = [
    'Alerta 1',
    'Alerta 2',
    'Alerta 3',
  ];
  estado = new UntypedFormControl();
  estadoList: string[] = [
    'Activo',
    'Inactivo',
  ];
  constructor(private fb: UntypedFormBuilder,
    private pasoParametrosService: PasoParametrosService,
    private router: Router) {
    this.roomForm = this.createContactForm();
  }
  ngOnInit(){
    this.data = this.pasoParametrosService.obtenerParametro("data");
    console.log(this.data, "DATAAAA");
    this.llenarLista();
  }
  onSubmit() {
    console.log('Form Value', this.roomForm.value);
  }
  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro("data");
    return this.fb.group({
      rNo: [this.data.id, [Validators.required]],
      rType: [this.data.tema, [Validators.required]],
      pName: [this.data.desripcion, [Validators.required]],
      dDate: [this.data.date, [Validators.required]],
      grado: [this.data.gradoAfectacion, [Validators.required]],
      primerPensamiento: [this.data.firstPen, [Validators.required]],
      comportamiento: [this.data.comportamiento, [Validators.required]],
      sentimiento: ['Tristeza', [Validators.required]],
    });
  }

  llenarLista(){
    this.listaSigAlarMadre = [
     {id:1, descripcion:"Soy el Signo alarma 1", estado:"Sí", usuario:"Valentina Escobar"},
     {id:2, descripcion:"Soy el Signo alarma 2", estado:"No", usuario:"Valentina Escobar"},
     {id:3, descripcion:"Soy el Signo alarma 3", estado:"Sí", usuario:"Valentina Escobar"},
     {id:4, descripcion:"Soy el Signo alarma 4", estado:"No", usuario:"Valentina Escobar"},
    ];
    this.listaSigAlarBebe = [
      {id:1, descripcion:"Soy el Signo alarma 5", estado:"No", usuario:"Valentina Escobar"},
      {id:2, descripcion:"Soy el Signo alarma 6", estado:"Sí", usuario:"Valentina Escobar"},
      {id:3, descripcion:"Soy el Signo alarma 7", estado:"No", usuario:"Valentina Escobar"},
      {id:4, descripcion:"Soy el Signo alarma 8", estado:"Sí", usuario:"Valentina Escobar"},
     ];
  }

  volver() {
    this.router.navigate(['/admin/room/all-rooms']);
  }
}
