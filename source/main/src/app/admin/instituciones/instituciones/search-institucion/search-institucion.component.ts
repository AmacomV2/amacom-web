import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';

@Component({
  selector: 'app-search-institucion',
  templateUrl: './search-institucion.component.html',
  styleUrls: ['./search-institucion.component.scss'],
})
export class SearchInstitucionComponent {
  patientForm: UntypedFormGroup;
  listaServicio: any;
  listaPersonal: any;
  public indicePrimerItem: number = 1;
  public indiceUltimoItem: number = 10;
  public data: any;
  formdata = {
    first: 'Pooja',
    last: 'Sarma',
    gender: 'Female',
    mobile: '123456789',
    age: '23',
    email: 'test@example.com',
    maritalStatus: '1',
    bGroup: 'O+',
    bPresure: '123',
    sugger: '150',
    injury: 'Fever',
    address: '101, Elanxa, New Yourk',
    dob: '1987-02-17T14:22:18Z',
    uploadFile: '',
  };
  constructor(private fb: UntypedFormBuilder,
    private pasoParametrosService: PasoParametrosService,
    private router: Router) {
    this.llenarLista();
    this.patientForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.patientForm.value);
  }
  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro("data");
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
  }

  volver(){
    this.router.navigate(['/admin/instituciones/instituciones/all-instituciones']);
  }

  llenarLista(){
    this.listaPersonal = [
     {id:1, descripcion:"Hernan Huertas"},
    ];
     this.listaServicio = [
      {id:1, nombre:"servicio 2", descripcion:"Soy el servicio 2"},
     ];
  }
}
