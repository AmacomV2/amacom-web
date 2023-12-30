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
  selector: 'app-add-allotment',
  templateUrl: './add-allotment.component.html',
  styleUrls: ['./add-allotment.component.scss'],
})
export class AddAllotmentComponent 
implements OnInit{
  public data: any;
  public modoEditar: boolean = false;
  public titulo: any;
  public subtitulo: any;
  roomForm: UntypedFormGroup;
  public listaSigAlarMadre: Array<any> = [];
  public listaSigAlarPadre: Array<any> = [];
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
  constructor(private fb: UntypedFormBuilder,
    private router: Router,
    private pasoParametrosService: PasoParametrosService) {
    this.roomForm = this.createContactForm();
  }
  ngOnInit() {
     this.llenarLista();
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
  }

  cancel() {
    this.router.navigate(['/doctor/room/all-rooms']);
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro("data");
    console.log("DATAA", this.data);
    this.modoEditar = this.pasoParametrosService.obtenerParametro("modoEditar");
    if(this.modoEditar==true){
      this.titulo = "Editar situación";
      this.subtitulo = "En esta pantalla podrás editar la situación";
      return this.fb.group({
        id: [this.data.id, [Validators.required]],
        tema: [this.data.tema, [Validators.required]],
        descripcion: [this.data.descripcion, [Validators.required]],
        gradoAfectacion: [this.data.date, [Validators.required]],
        date: [this.data.date, [Validators.required]],
      });
    } else {
      this.titulo = "Adicionar situación";
      this.subtitulo = "En esta pantalla podrás adicionar una situación";
      return this.fb.group({
        id: ['', [Validators.required]],
        tema: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
        gradoAfectacion: ['', [Validators.required]],
        date: ['', [Validators.required]],
      });
    }
  } 
}
