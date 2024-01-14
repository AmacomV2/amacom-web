import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';

@Component({
  selector: 'app-add-diagnostico',
  templateUrl: './add-diagnostico.component.html',
  styleUrls: ['./add-diagnostico.component.scss'],
})
export class AddDiagnosticoComponent {
  public data: any;
  public modoEditar: boolean = false;
  public titulo: any;
  public subtitulo: any;
  patientForm: UntypedFormGroup;
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
  indicador = new UntypedFormControl();
  indicadorList: string[] = [
    'Indicador 1',
    'Indicador 2',
    'Indicador 3',
  ];
  actividad = new UntypedFormControl();
  actividadList: string[] = [
    'Actividad 1',
    'Actividad 2',
    'Actividad 3',
    'Actividad 4',
    'Actividad 5',
  ];
  constructor(private fb: UntypedFormBuilder,
    private router: Router,
    private pasoParametrosService: PasoParametrosService,
    private location: Location) {
    this.patientForm = this.createContactForm();
    
    this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      gender: ['', [Validators.required]],
      mobile: [''],
      dob: ['', [Validators.required]],
      age: [''],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      maritalStatus: [''],
      address: [''],
      bGroup: [''],
      bPresure: [''],
      sugger: [''],
      injury: [''],
      uploadFile: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.patientForm.value);
  }

  cancelar() {
    this.location.back();
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro("data");
    console.log("DATAA", this.data);
    this.modoEditar = this.pasoParametrosService.obtenerParametro("modoEditar");
    if(this.modoEditar==true){
      this.titulo = "Editar diagnostico";
      this.subtitulo = "En esta pantalla podrás editar el diagnostico";
      return this.fb.group({
        id: [this.data.id, [Validators.required]],
        resultado: [this.data.resultado, [Validators.required]],
        alerta: [this.data.alerta, [Validators.required]],
        estado: [this.data.estado, [Validators.required]],
        date: [this.data.date, [Validators.required]],
      });
    } else {
      this.titulo = "Adicionar diagnostico";
      this.subtitulo = "En esta pantalla podrás adicionar un diagnostico";
      return this.fb.group({
        id: ['', [Validators.required]],
        resultado: ['', [Validators.required]],
        alerta: ['', [Validators.required]],
        estado: ['', [Validators.required]],
        date: ['', [Validators.required]],
      });
    }
  } 
}
