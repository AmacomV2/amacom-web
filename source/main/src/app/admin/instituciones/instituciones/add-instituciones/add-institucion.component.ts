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
  selector: 'app-add-institucion',
  templateUrl: './add-institucion.component.html',
  styleUrls: ['./add-institucion.component.scss'],
})
export class AddInstitucionComponent 
implements OnInit{
  public data: any;
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
    this.institucionForm = this.createContactForm();
  }
  ngOnInit() {
     this.llenarLista();
   }
  onSubmit() {
    console.log('Form Value', this.institucionForm.value);
  }

  search(data: any) {
   // console.log('Form Value', this.institucionForm.value);
  }
  editCall(data: any) {
    // console.log('Form Value', this.institucionForm.value);
   }
   deleteItem(data: any) {
    // console.log('Form Value', this.institucionForm.value);
   }

  llenarLista(){
    this.listaSigAlarMadre = [
     {id:1, descripcion:"Hernan Huertas"},
    ];
    this.listaInstitucion = [
      {id:1, nombre:"Institucion 1", tipo:"tipo 1", descripcion:"Soy la Institucion 1", date:"11/11/2011"},
      {id:2, nombre:"Institucion 2", tipo:"tipo 2", descripcion:"Soy la Institucion 2", date:"11/11/2011"},
      {id:3, nombre:"Institucion 3", tipo:"tipo 3", descripcion:"Soy la Institucion 3", date:"11/11/2011"},
     ];
     this.listaServicio = [
      {id:1, nombre:"servicio 1", descripcion:"Soy el servicio 1"},
      {id:2, nombre:"servicio 2", descripcion:"Soy el servicio 2"},
      {id:3, nombre:"servicio 3", descripcion:"Soy el servicio 3"},
     ];
  }

  cancel() {
    this.router.navigate(['/admin/instituciones/instituciones/all-instituciones']);
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro("data");
    console.log("DATAA", this.data);
    this.modoEditar = this.pasoParametrosService.obtenerParametro("modoEditar");
    if(this.modoEditar==true){
      this.titulo = "Editar institución";
      this.subtitulo = "En esta pantalla podrás editar la institución";
      return this.fb.group({
        id: [this.data.id, [Validators.required]],
        nombre: [this.data.nombre, [Validators.required]],
        tipo: [this.data.tipo, [Validators.required]],
        descripcion: [this.data.descripcion, [Validators.required]],
        date: [this.data.date, [Validators.required]],
      });
    } else {
      this.titulo = "Adicionar institución";
      this.subtitulo = "En esta pantalla podrás adicionar una institución";
      return this.fb.group({
        id: ['', [Validators.required]],
        nombre: ['', [Validators.required]],
        tipo: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
        date: ['', [Validators.required]],
      });
    }
  } 

}
