import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
@Component({
  selector: 'app-search-diagnostico',
  templateUrl: './search-diagnostico.component.html',
  styleUrls: ['./search-diagnostico.component.scss'],
})
export class SearchDiagnosticoComponent 
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
      resultado: [this.data.resultado, [Validators.required]],
      alerta: [this.data.alerta, [Validators.required]],
      estado: [this.data.estado, [Validators.required]],
      date: [this.data.date, [Validators.required]],
    });
  }

  llenarLista(){
    this.listaSigAlarMadre = [
     {id:1, descripcion:"Primer signo de alarma", estado:"Sí"},
     {id:2, descripcion:"Segundo signo de alarma", estado:"Sí"},
     {id:3, descripcion:"Tercer signo de alarma", estado:"No"},
     {id:4, descripcion:"Cuarto signo de alarma", estado:"No"},
     {id:5, descripcion:"Quinto signo de alarma", estado:"Sí"},
     {id:6, descripcion:"Sexto signo de alarma", estado:"Sí"},
     {id:7, descripcion:"Septimo signo de alarma", estado:"No"},
     {id:8, descripcion:"Octavo signo de alarma", estado:"Sí"},
    ];
  }

  volver() {
    this.router.navigate(['/doctor/room/all-rooms']);
  }
}
