import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent {
  public data: any;
  public modoEditar: boolean = false;
  public titulo: any;
  public subtitulo: any;
  patientForm: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder,
    private router: Router,
    private pasoParametrosService: PasoParametrosService) {
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
    this.router.navigate(['/admin/patients/all-patients']);
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro("data");
    console.log("DATAA", this.data);
    this.modoEditar = this.pasoParametrosService.obtenerParametro("modoEditar");
    if(this.modoEditar==true){
      this.titulo = "Editar persona";
      this.subtitulo = "En esta pantalla podrás editar la persona";
      return this.fb.group({
        id: [this.data.id, [Validators.required]],
        nombre: [this.data.nombre, [Validators.required]],
        apellido: [this.data.apellido, [Validators.required]],
        direccion: [this.data.direccion, [Validators.required]],
        estado: [this.data.estado, [Validators.required]],
        estadoCivil: [this.data.estadoCivil, [Validators.required]],
        fechaNacimientobre: [this.data.fechaNacimiento, [Validators.required]],
        genero: [this.data.genero, [Validators.required]],
        numeroDocumento: [this.data.numeroDocumento, [Validators.required]],
        tipoDocumento: [this.data.tipoDocumento, [Validators.required]],
        ocupacion: [this.data.ocupacion, [Validators.required]],
        date: [this.data.date, [Validators.required]],
        uploadFile: [''],
      });
    } else {
      this.titulo = "Adicionar persona";
      this.subtitulo = "En esta pantalla podrás adicionar una persona";
      return this.fb.group({
        id: ['', [Validators.required]],
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
        estado: ['', [Validators.required]],
        estadoCivil: ['', [Validators.required]],
        fechaNacimientobre: ['', [Validators.required]],
        genero: ['', [Validators.required]],
        numeroDocumento: ['', [Validators.required]],
        tipoDocumento: ['', [Validators.required]],
        ocupacion: ['', [Validators.required]],
        date: ['', [Validators.required]],
        uploadFile: [''],
      });
    }
  } 
}
