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
  selector: 'app-add-tema',
  templateUrl: './add-tema.component.html',
  styleUrls: ['./add-tema.component.scss'],
})
export class AddTemaComponent 
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
    this.router.navigate(['/admin/gestion-temas/all-temas']);
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro("data");
    console.log("DATAA", this.data);
    this.modoEditar = this.pasoParametrosService.obtenerParametro("modoEditar");
    if(this.modoEditar==true){
      this.titulo = "Editar tema";
      this.subtitulo = "En esta pantalla podrás editar el tema";
      return this.fb.group({
        id: [this.data.id, [Validators.required]],
        nombre: [this.data.nombre, [Validators.required]],
        validez: [this.data.validez, [Validators.required]],
        temaPadre: [this.data.temaPadre, [Validators.required]],
        date: [this.data.date, [Validators.required]],
      });
    } else {
      this.titulo = "Adicionar tema";
      this.subtitulo = "En esta pantalla podrás adicionar un tema";
      return this.fb.group({
        id: ['', [Validators.required]],
        nombre: ['', [Validators.required]],
        validez: ['', [Validators.required]],
        temaPadre: ['', [Validators.required]],
        date: ['', [Validators.required]],
      });
    }
  } 
  
}
